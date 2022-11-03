const isOn = (number) => {
    let saklar = 0;
    for(let i=1; i <= number; i++){
      if(number%i === 0){
        saklar++
      }
    }
    if(saklar === 2){
      console.log("Lampu Mati")
    }else{
      console.log("Lampu Menyala")
    }
  }

isOn(4)
isOn(5)