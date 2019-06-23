import { webFrame } from 'electron';
import { PROTOCOL_NAME } from '@findeth/enclave';

webFrame.registerURLSchemeAsPrivileged(PROTOCOL_NAME);
