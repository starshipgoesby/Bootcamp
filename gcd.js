gcd = (firstNumber, secondNumber) => {
    return secondNumber === 0 ? Math.abs(firstNumber) : gcd(secondNumber, firstNumber % secondNumber);
}

const num1 = 12;
const num2 = 16;
const fpb = gcd(num1, num2);
console.log(`FPB dari ${num1} dan ${num2} adalah: ${fpb}`);

isPrime = (angka) => {
    if (angka <= 1) {
      return false;
    }
    else{
        for (let i = 2; i < angka; i++) {
            if (angka % i === 0) {
              return false;
            }
          }
    }
    return true;
  }
  
  console.log(isPrime(3));   
  console.log(isPrime(7));  
  console.log(isPrime(6)); 

cariAngkaPrima = (angkaPertama, angkaKedua) => {
    let angkaPrima = [];
  
    for (let i = angkaPertama; i <= angkaKedua; i++) {
      if (isPrime(i)) {
         angkaPrima.push(i);
      }
    }
  
    return angkaPrima;
  }
  
  const angkaPrimaAntara10dan50 = cariAngkaPrima(1, 5);
  console.log(angkaPrimaAntara10dan50);