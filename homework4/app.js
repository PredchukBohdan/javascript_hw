// <<<<<<<<<<<<<<<<<<<<<<<<<< Задание 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*function getSum(a = 0,b = 0){
    console.log('a', + a);
    console.log('b', + b);
    console.log(`Сумма: ${a + b}`);
}
getSum(6);
getSum(17,22);*/

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

/*function getSum(a = 0,b = 0){
    console.log('a', + a);
    console.log('b', + b);
    const sum = a + b;
    return sum;
}
const answer = getSum(6,15);
console.log(`Сумма: ${answer}`);

console.log(`Сумма: ${getSum(8,12)}`);*/

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

/*const getOperation = (a, b) => {
    console.log('a', + a);
    console.log('b', + b);
    return a + b;
}
const res = getOperation(5, 7);
console.log('Сумма:', res);
console.log('Сумма:', getOperation(3, 2));*/

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Задание 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>


/*const getUserGreeting = () => {
    const userName = prompt('Введите Ваше имя:');
    const userAge = Number(prompt('Введите Ваш возраст:'));
    if (userAge >= 30){
        alert(`Здравствуйте, ${userName}`);
    } else {
        alert(`Привет, ${userName}`);
    } 
}
getUserGreeting();*/

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Задание 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>

const getDegree = (a, b = 2) => {
    let answer = a ;
    answer **= b;
    return answer;
}
const result = getDegree(2,3);
console.log(result);
