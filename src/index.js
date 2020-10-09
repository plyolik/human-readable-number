


module.exports = function toReadable (num) {
  let result = '';
  let firstTen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let otherTen = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (num === 0) {
    return 'zero'
  }
  let n = num;
  while (n > 0) {
    if (n >= 100 && n < 1000) {
      result = firstTen[Math.floor(n / 100)] + ' hundred ';
      n = n % 100
    } else if (n >= 1 && n <= 19) {
      result += firstTen[n];
      break;
    } else if (n >= 20 && n <= 99) {
      result += otherTen[Math.floor(n / 10)] + ' ' + firstTen[n % 10]
      break;
    } else {
      break;
    }
  }
  return result.trim()
}
