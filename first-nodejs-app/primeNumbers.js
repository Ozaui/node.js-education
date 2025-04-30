const argumants = process.argv.slice(2)

const showPrimeNumbers = (lowNumber, highNumber) => {
    for(let i = lowNumber; i<= highNumber; i++){
      let isPrime = true;
      for(let j = 2; j<=i; j++){
        if(i % j === 0 && j !==i){
            isPrime = false
        }
        
      }
      if(isPrime){
        console.log(i)
      }
    }

}

showPrimeNumbers(Number(argumants[0]),Number(argumants[1]))

