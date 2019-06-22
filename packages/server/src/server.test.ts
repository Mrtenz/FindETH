import fs, { mock } from 'jest-plugin-fs';
import server, { generateCertificate, getCertificate, startServer } from './server';

jest.mock('fs', () => require('jest-plugin-fs/mock'));
jest.mock('https', () => ({
  createServer: () => ({
    listen: (port: number, callback: () => void) => callback()
  })
}));

beforeEach(() => {
  fs.mock();
});

afterEach(() => {
  fs.restore();
});

describe('Server', () => {
  it('generates an HTTPS certificate and writes it to the filesystem', async () => {
    await expect(generateCertificate('/server.pem')).resolves.toContain('BEGIN CERTIFICATE');
    await expect(mock.readFileSync('/server.pem', 'utf8')).toBeTruthy();
  });

  it('returns an HTTPS certificate', async () => {
    const spy = jest.spyOn(server, 'generateCertificate');

    await expect(getCertificate('/server.pem')).resolves.toContain('BEGIN CERTIFICATE');
    await expect(mock.readFileSync('/server.pem', 'utf8')).toBeTruthy();

    await expect(getCertificate('/server.pem')).resolves.toContain('BEGIN CERTIFICATE');
    expect(spy).toHaveBeenCalledTimes(1);

    mock.utimesSync('/server.pem', 12345, 12345);
  });

  it('starts a server', async () => {
    await expect(startServer('foo')).resolves.not.toThrow();
  });
});
