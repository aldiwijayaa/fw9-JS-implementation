function divideAndSort(number){
  let result = '';
  let splitNumberByZero = number.toString().split('0');

  splitNumberByZero.map(item => {
    let newArrayResult = item.split('');

    result +=  newArrayResult.sort((a,b) => {
    return a-b
  }).join('')
    
  });

  return parseInt(result);
};


console.log(divideAndSort(5956560159466056))