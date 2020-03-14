'use strict';

let money = +prompt('Ваш бюджет на месяц?', 0);
let time = new Date(prompt('Введите дату в формате YYYY-MM-DD', '2020-02-02'));

let appData = {
  finance: money,
  timeData: time,
  expenses: {
    firstQ: prompt('Введите обязательную статью расходов в этом месяце', 'комуналка'),
    secondQ: +prompt('Во сколько обойдется?', 300)
  }
};

alert('Ваш бютжет на день' + (appData.finance - appData.expenses.firstQ) / 30);