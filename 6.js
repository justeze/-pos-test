function cetakFibonacci(number) {
    const obj = [1, 1];
    for (var i = 2; i < number; i++) {
      obj.push(obj[i-2] + obj[i-1]);
    }
    return obj; 
  }
  
  console.log(cetakFibonacci(11)); 
