module.exports = function toReadable (number) {
    let units = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
    let tens = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];
    let arr = [];
    if (number === 0) return 'zero';
    else {
       let num = number.toString();
       let a = num.length;

       if (number < 20) {
           return units[number];
       }

       if (number > 19 && a === 2) {
            let i = Number(num[0]);
            arr.push(tens[i]);
            if (number%10 === 0) return tens[i];
            else {
                arr.push(units[number%10]);
                return arr.join(' ');
            }
       }
       if (a === 3) {
           let i = Number(num[0]);
           arr.push(units[i]);
           arr.push('hundred');
           if (number % 100 === 0) return arr.join(' ');
           else {
               if (number % 100 < 20) {
                   arr.push(units[number % 100]);
                   return arr.join(' ');
               } else {
                   let j = Number(num[1]);
                   arr.push(tens[j]);
                   if (number % 10 === 0) return arr.join(' ');
                   else {
                       arr.push(units[number % 10]);
                       return arr.join(' ');
                   }
               }
           }
           }

       }
}
