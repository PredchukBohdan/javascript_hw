/*<<<<<<<<<<<<<<<< Задание 1 >>>>>>>>>>>>>>>>>*/ 


let number1;
let number2;
number1 = Number(prompt('Введите число 1'));
number2 = Number(prompt('Введите число 2')); 

if (number1 === number2){
    alert('Числа равны');
} else if (number1 > number2){
    alert(`Число ${number1} больше, чем ${number2}`);
} else if (number1 < number2){
    alert(`Число ${number1} меньше, чем ${number2}`);
}
 else {
    alert('Некорректный ввод');
};


/*<<<<<<<<<<<<<<<< Задание 2 >>>>>>>>>>>>>>>>>*/ 


let firstNumber;
let secondNumber;
let userAction;

firstNumber = Number(prompt('Введите первое число'));
secondNumber = Number(prompt('Введите второе число'));
userAction = prompt('Введите одно из действий: + - / *');

    switch (userAction){
        case '+':
            alert(`Результат: ${firstNumber + secondNumber}`);
            break;
        case '-':
            alert(`Результат: ${firstNumber - secondNumber}`);
            break;
        case '*':
            alert(`Результат: ${firstNumber * secondNumber}`);
            break;
        case '/':
            alert(`Результат: ${firstNumber / secondNumber}`);
            break;
        default :
            alert('Неккоректный ввод');
            break;
    };


    
/*<<<<<<<<<<<<<<<< Задание 3 >>>>>>>>>>>>>>>>>*/   


let visitorAge = Number(prompt('Сколько Вам лет?'));

if (visitorAge >= 18 && visitorAge < 60) {
    alert('Добро пожаловать в Парк Развлечений!');

} else if (visitorAge >= 12 && visitorAge < 18) {
    let n = prompt('Если у Вас есть разрешение от взрослых на посещение парка введите yes, если нет разрешения введите no?');
        if (n == 'yes'){
            alert('Добро пожаловать в Парк Развлечений!');
        } else if (n == 'no') {
            alert('Вход в парк запрещен');
        }
        
} else if (visitorAge >= 60 && visitorAge <= 80) {
    n = prompt('Если у Вас есть разрешение от взрослых на посещение парка введите yes, если нет разрешения введите no?');
        if (n == 'yes'){
            alert('Добро пожаловать в Парк Развлечений!');
        } else if (n == 'no') {
            alert('Вход в парк запрещен');
        }

} else {
    alert('Вход в парк запрещен');
};