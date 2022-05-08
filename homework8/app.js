//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Завдання 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const numbersArray = [true, false, false, true, false, true, true, false];

  const countTrue = (arr) => {
      let numb = 0;
      arr.forEach(number => {
          if (number === true){
              numb++;
          }
      });
      return numb;
  }
  const result = countTrue(numbersArray);
  console.log(result);

 //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Завдання 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

 // const valueStr = ["a", "v", "a", "b", "b"];
  const valueStr = [
    "apples",
    "oranges",
    "pears",
    "pears",
    "apples",
    "oranges",
    "oranges",
    "pears",
  ];

const getValueCount = (arr) => {
    const res = {};

    arr.forEach(item => {
        if (!res[item]){
            res[item] = 1;
        } else{
            res[item] += 1;
        }
    });
    return res;
}
//const result = getValueCount(valueStr);
//console.log(result);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Завдання 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const excessArr = [2, 6];
const findExcess = (arr) => {
    let evenArr = [];
    let oddArr = [];

    if (arr.length <= 2){
        return alert(`Array is short!!!`);
    }

    arr.forEach(integer => {
        if (integer % 2 === 0){
            evenArr.push(integer);
        } else {
            oddArr.push(integer);
        }
    });
    
    if (evenArr.length > oddArr.length){
        return oddArr[0];
    } else {
        return evenArr[0];
    }
}
//const result = findExcess(excessArr);
//console.log(result);