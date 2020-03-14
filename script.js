'use strict';

let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
  finance: money,
  timeData: time,
  expenses: {
    firstQ: prompt('Введите обязательную статью расходов в этом месяце'),
    secondQ: prompt('Во сколько обойдется?')
  }
};

alert('Ваш бютжет на день' + (+appData.finance - +appData.expenses.firstQ) / 30);