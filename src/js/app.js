export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(1, 'Ошибка ТИП 1');
    this.errors.set(2, 'Ошибка ТИП 2');
  }

  translate(code) {
    return !this.errors.has(code) ? 'Unknown error' : this.errors.get(code);
  }
}

// const errorRepository = new ErrorRepository();

// console.log(errorRepository.translate(1));
// console.log(errorRepository.translate(2));
// console.log(errorRepository.translate(3));
