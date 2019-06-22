import { start } from './server';

start().catch(error => {
  console.error(error);
  process.exit(1);
});
