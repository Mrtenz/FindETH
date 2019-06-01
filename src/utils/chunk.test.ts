import { chunk } from './chunk';

it('creates chunks from an array with a fixed length', () => {
  const array = ['foo', 'bar', 'baz', 'qux'];
  const chunks = chunk(array, 2);

  expect(chunks.length).toBe(2);
  expect(chunks[0]).toStrictEqual(['foo', 'bar']);
  expect(chunks[1]).toStrictEqual(['baz', 'qux']);
});

it('includes items if the length is uneven', () => {
  const array = ['foo', 'bar', 'baz', 'qux'];
  const chunks = chunk(array, 3);

  expect(chunks.length).toBe(2);
  expect(chunks[0]).toStrictEqual(['foo', 'bar', 'baz']);
  expect(chunks[1]).toStrictEqual(['qux']);
});

it('does not mutate the original array', () => {
  const array = ['foo', 'bar', 'baz', 'qux'];
  const copy = [...array];
  const chunks = chunk(array, 2);

  expect(chunks.length).toBe(2);
  expect(array).toStrictEqual(copy);
});
