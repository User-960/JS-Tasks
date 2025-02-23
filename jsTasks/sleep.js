function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const test = async () => {
  console.log('Начало');
  await sleep(2000); // Приостанавливаем выполнение на 2 секунды
  console.log('Прошло 2 секунды');
}

test()