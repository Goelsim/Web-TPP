let arr = [4, 14, 17, 23, 48, 66];

function mapEle(num) {
    if (num % 2 == 0) {
      return num + 1;
    } else {
      return num - 1;
    }
  }
  
  function filterPrime(num) {
    for (let div = 2; div * div <= num; div++) {
      if (num % div == 0) {
        return false;
      }
    }
    return true;
  }
  
  let mapArr = arr.map(mapEle);
  console.log(mapArr);
  const primeArr = mapArr.filter(filterPrime);
  console.log(primeArr);