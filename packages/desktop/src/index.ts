import 'regenerator-runtime/runtime';
import { app, BrowserWindow } from 'electron';

const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production';

const createWindow = async (): Promise<BrowserWindow> => {
  const window = new BrowserWindow();

  window.webContents.openDevTools();

  if (IS_DEVELOPMENT) {
    await window.loadURL('https://localhost:8000');
  } else {
    await window.loadFile(__dirname + '/index.html');
  }

  window.on('close', app.quit);

  return window;
};

app.on('ready', createWindow);

app.on('window-all-closed', app.quit);

if (IS_DEVELOPMENT) {
  /**
   * Allow self-signed certificates on development.
   */
  app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
    event.preventDefault();
    callback(true);
  });
}
