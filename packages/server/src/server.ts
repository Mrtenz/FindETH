import * as path from 'path';
import * as fs from 'fs';
import webpack from 'webpack';
import * as selfsigned from 'selfsigned';
import { promisify } from 'util';
import ora from 'ora';
import { createServer } from 'https';
import finalhandler from 'finalhandler';
import serveStatic from 'serve-static';
import webpackConfig from '@findeth/web/webpack/production';

const generate = promisify<selfsigned.Attribute[], selfsigned.Options, selfsigned.Certificates>(
  selfsigned.generate
);
const writeFile = promisify(fs.writeFile);

const CERTIFICATE_PATH = path.join(__dirname, '../server.pem');
const STATIC_DIR = path.join(__dirname, '../../../dist/web');

/**
 * Use webpack to build output files.
 *
 * @return {Promise<void>}
 */
export const buildOutputFiles = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig, error => {
      if (error) {
        return reject(error);
      }

      resolve();
    });
  });
};

/**
 * Generate a new self-signed SSL certificate.
 *
 * @return {Promise<string>} A Promise with the self-signed certificate.
 */
export const generateCertificate = async (outputPath: string): Promise<string> => {
  const certificates = await generate(
    [
      {
        name: 'commonName',
        value: 'localhost'
      }
    ],
    {
      algorithm: 'sha256',
      days: 30,
      keySize: 2048
    }
  );

  await writeFile(outputPath, certificates.private + certificates.cert, 'utf8');

  return certificates.private + certificates.cert;
};

/**
 * Get an existing SSL certificate or generate a new one if it doesn't exist.
 *
 * @return {Promise<string>} A Promise with the self-signed certificate.
 */
export const getCertificate = async (certificatePath: string): Promise<string> => {
  let certificate: string | undefined;

  try {
    const stat = fs.statSync(certificatePath);
    if (stat.isFile()) {
      const now = new Date().getTime();
      const modifiedTime = stat.mtime.getTime();

      if (now - modifiedTime < 2592000000) {
        // 30 days
        certificate = fs.readFileSync(certificatePath, 'utf8');
      }
    }
  } catch {
    /* noop */
  }

  if (!certificate) {
    certificate = await server.generateCertificate(certificatePath);
  }

  return certificate;
};

/**
 * Start an HTTPS server with the provided certificate.
 *
 * @param {string} certificate The SSL certificate to use.
 * @return {Promise<void>}
 */
export const startServer = (certificate: string): Promise<void> => {
  return new Promise(resolve => {
    const serve = serveStatic(STATIC_DIR);
    const server = createServer(
      {
        key: certificate,
        cert: certificate
      },
      (request, response) => {
        const done = finalhandler(request, response);
        serve(request as any, response as any, done);
      }
    );

    server.listen(8000, () => {
      resolve();
    });
  });
};

/**
 * Run a function with a fancy spinner in the console.
 *
 * @param {ora.Ora} spinner An instance of the Ora spinner.
 * @param {Function} what The function to run.
 * @param {string} message The message to show while running the function.
 * @param {any[]} args The function arguments
 */
export const run = async <Args, Func extends (...args: Args[]) => Promise<any>>(
  spinner: ora.Ora,
  message: string,
  what: Func,
  ...args: Args[]
): Promise<ReturnType<Func>> => {
  spinner.text = message;
  try {
    const result = await what(...args);
    spinner.succeed();
    return result;
  } catch (error) {
    spinner.fail();
    console.error(error);
    process.exit(1);
  }
};

/**
 * Start the server.
 *
 * @return {Promise<void>}
 */
export const start = async (): Promise<void> => {
  const spinner = ora();
  spinner.start();

  await run(spinner, 'Building output files', buildOutputFiles);
  const certificate = await run(
    spinner,
    'Getting SSL certificate',
    getCertificate,
    CERTIFICATE_PATH
  );
  await run(spinner, 'Starting HTTPS server', startServer, certificate);
  spinner.info('Running on https://localhost:8000');
};

/**
 * Required for unit tests...
 */
const server = {
  generateCertificate
};

export default server;
