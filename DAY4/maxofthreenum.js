function maxOfThreenum(x, y, z) 
 {
  maxNumber = 0;
  (x > y) ? maxNumber = x : maxNumber = y;
  (z > maxNumber) ? maxNumber = z : maxNumber;
  return maxNumber;
}

console.log(maxOfThreenum(1,0,1));
console.log(maxOfThreenum(0,-10,-20));
console.log(maxOfThreenum(100,500,400));
