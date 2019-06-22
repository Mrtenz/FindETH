import { isEnsName } from './ens';

it('checks for valid ens names', () => {
  expect(isEnsName('foobarbaz.eth')).toEqual(true);
  expect(isEnsName('abcde12345.eth')).toEqual(true);
});

it('checks for invalid ens names', () => {
  expect(isEnsName('foobarbaz.ethfoo')).toEqual(false);
  expect(isEnsName('0x0000000000000000000000000000000000000000')).toEqual(false);
});
