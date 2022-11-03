const ifPrime = (number) => {
    let divider = 0;
    for(let i=1; i <= number; i++){
      if(number%i === 0){
        divider++
      }
    }
    if(divider === 2){
      console.log("Bilangan Prima")
    }else{
      console.log("Bukan Bilangan Prima")
    }
  }
  ifPrime(3)
  ifPrime(7)
  ifPrime(10)