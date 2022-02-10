
/*const LOGIN = 'Java';
const PASSWORD = 'Script';

const authorize = () => {
    let userPassword;
    let userLogin;
    let isAuthSuccess = false;
    let tries = 3;

    do {

        userLogin = prompt('Введите Ваш логин:');
        if (!userLogin){
            alert('Логин неверный!');
            continue;
        }

        userPassword = prompt('Введите Ваш пароль:');
        if (!userPassword){
            alert('Пароль неверный!');
            continue;
        }

        
        if (userLogin === LOGIN && userPassword === PASSWORD){
            isAuthSuccess = true;
        }  else {
             tries--;
             alert(`Неверный логин или пароль! Осталось попыток: ${tries}`);
           }
        
    } while (!isAuthSuccess && tries > 0);

    if (!tries){
        console.log(`Доступ запрещен!!!`);
        return;
    }
    alert('Welcome');
}
authorize();*/

/*const getPrimeNumber = () => {
    let firstNumber;
    let secondNumber;

    firstNumber = Number(prompt(`Введите первое число:`));
    secondNumber = Number(prompt(`Введите второе число:`));

    NextPrime: for (let i = firstNumber >= 2 ? firstNumber : 2; i <= secondNumber; i++){
        for (let j = 2; j < i; j++){
            if(i % j === 0) continue NextPrime;
        }
        console.log(i);
    }
}
console.log(getPrimeNumber());*/

const getPrimeNumber = (firstNumber, secondNumber) => {

    NextPrime: for (let i = firstNumber >= 2 ? firstNumber : 2; i <= secondNumber; i++){

        for (let j = 2; j < i; j++){
            if(i % j === 0) continue NextPrime;
        }
        console.log(i);
    }
}
console.log(getPrimeNumber(1, 100));