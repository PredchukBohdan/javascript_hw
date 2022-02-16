//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Задание 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*const getTimetable = () => {
    let schedule = {};
    let time;
    let task;

    while (!(time === null) || !(task === null)){
        time = prompt(`Введите время в формате 00:00`);
            if (time === null){
                break;
            }

        task = prompt(`Введите задачу`);
            if (task === null){
                break;
            }
        
        schedule[time] = task;

    }   return schedule;
}
const result = getTimetable();
console.log(result);*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Задание 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*let salaries = {
    John: 14500.50,
    Kate: 12300,
    Lia: 15650.80,
    Derek: 13000,
    Anthony: 6900,
};

const getSumSalary = (obj) => {
    let salary = 0;

    for (let key in obj){
        salary += Number(obj[key]);
    }
    return salary.toFixed(1);
}
const res =(getSumSalary(salaries));
console.log(`Общая сумма: ${res}`);*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Задание 2.1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const salary = {
    John: 14500,
    Anna: 12100.35,
    Piter: 2900.40,
    Malcolm: 7800.95,
    Gorge: 15600,
  };

const sumSalaries = () => {

    let sum = 0;
    for (let name of Object.values(salary)) {
      sum += name;
    }
    return sum;
}
const result = sumSalaries(salary);
console.log(`Сумма: ${result}`);