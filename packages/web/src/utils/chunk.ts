export const chunk = <T>(input: T[], size: number): T[][] => {
  return input.reduce<T[][]>((array, item, index) => {
    return index % size === 0
      ? [...array, [item]]
      : [...array.slice(0, -1), [...array.slice(-1)[0], item]];
  }, []);
};
