const str = 'one.two.three.four.five';
const arrStr = str.split('.')
const result = arrStr.reduceRight((acc, val) => {
  return { [val]: acc }
}, {});

console.log(result);