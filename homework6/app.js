//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Задание 1 >>>>>>>>>>>>>>>>>>>>>>>>>>

const getValidPassword = () => {
    let userPassword;

    do {
    userPassword = prompt(`Введите пароль:`);
    if (userPassword.length < 6){
        alert(`Пароль должен содержать не менее 6 символов!`);
        continue;
    } else if (userPassword === userPassword.toUpperCase()){
        alert(`Пароль должен содержать символы разных регистров!`);
        continue;
    } else if (userPassword === userPassword.toLowerCase()){
        alert(`Пароль должен содержать символы разных регистров!`);
        continue;
    }

    }while(userPassword.length < 6 || userPassword === userPassword.toUpperCase() || userPassword === userPassword.toLowerCase());
    const result2 = console.log( `Password: ${userPassword}`);
    return result2;
}

const getValidInit = () => {
    let userName;
    let userSurname;

    do {
        userName = prompt(`Введите Ваше имя:`);
        if (!userName){
            alert(`Неккоректный ввод! Повторите ещё раз`);
            continue;
        }

        userSurname = prompt(`Введите Вашу фамилию:`);
        if (!userSurname || userSurname == Number){
            alert(`Неккоректный ввод! Повторите ещё раз`);
            continue;
        }
        
    } while(!userName && !userSurname);

    userName = userName.toLowerCase();
    let firstUserName = userName.slice(0, 1).toUpperCase();
    userName = firstUserName + userName.slice(1);

    userSurname = userSurname.toLowerCase();
    let firstUserSurname = userSurname.slice(0, 1).toUpperCase();
    userSurname = firstUserSurname + userSurname.slice(1);
    
    const result = console.log(`Name: ${userName} Surname: ${userSurname}`);
    return result;  
}


const getValidSign = () => {

   if (!getValidInit() && !getValidPassword()){
       alert(`Регистрация прошла успешно!!!`);
   } else {
       alert(`Ошибка регистрации!!!`);
   }
}
getValidSign();

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Задание 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*const getRandomInteger = (min, max) => {

    let randomInteger = min + Math.random() * (max + 1 - min);
    return Math.floor(randomInteger);
  }
  
const resRandom = getRandomInteger(5, 8);
alert(resRandom);*/