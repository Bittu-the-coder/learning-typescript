function add(n1: number, n2: number, n3?: number) {
  return n3 ? n1 + n2 + n3 : n1 + n2;
}
function addRestPara(n1: number, n2: number, ...nums: number[]) {
  return n1 + n2 + nums.reduce((a, b) => a + b, 0);
}

console.log(add(1, 2, 4));

function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}
