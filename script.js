let money = +prompt("Ваш бюджет на месяц?", 0);
let time = new Date(prompt("Введите дату в формате YYYY-MM-DD", ));
let appData = {
    budget: money,
    timeData: time,
    expenses: {
        first: +prompt("Введите обязательную статью расходов в этом месяце", 0),
        second: +prompt("Сколько хотите отложить?", 0)
    },
    optionalExpenses:[],
    income:[],
    savings: false
}

let count = alert("Ваш бютжет на день " + 30/(appData.budget - appData.expenses.first - appData.expenses.second));