import ErrorRepository from '../app';

test('should return correct error message for code 1', () => {
  const errorRepository = new ErrorRepository();

  expect(errorRepository.translate(1)).toBe('Ошибка ТИП 1');
});

test('should return correct error message for code 2', () => {
  const errorRepository = new ErrorRepository();

  expect(errorRepository.translate(2)).toBe('Ошибка ТИП 2');
});

test('should return "Unknown error" for unknown code', () => {
  const errorRepository = new ErrorRepository();

  expect(errorRepository.translate(3)).toBe('Unknown error');
});
