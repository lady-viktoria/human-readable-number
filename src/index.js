module.exports = function toReadable (number) {
        const toTwenty = {
                0: 'zero',
                1: 'one', 
                2: 'two', 
                3: 'three', 
                4: 'four', 
                5: 'five', 
                6: 'six', 
                7: 'seven', 
                8: 'eight', 
                9: 'nine', 
                10: 'ten', 
                11: 'eleven', 
                12: 'twelve', 
                13: 'thirteen',
                14: 'fourteen',
                15: 'fifteen',
                16: 'sixteen',
                17: 'seventeen',
                18: 'eighteen',
                19: 'nineteen'                   
                    };
        const tens = {
                20: 'twenty',
                30: 'thirty',
                40: 'forty',
                50: 'fifty',
                60: 'sixty',
                70: 'seventy',
                80: 'eighty',
                90: 'ninety'
            }
    
            if(number<20){
                return toTwenty[number];
                } else if (number<100){
                    if(number%10===0){
                        return `${tens[number-number%10]}`;
                    } else {
                        return `${tens[number-number%10]} ${toTwenty[number%10]}`;
                    }
                } else if (number<1000){
                    if(number%100 === 0){
                        return `${toTwenty[Math.trunc(number/100)]} hundred`;
                        } else if (number%100 < 20){
                            return `${toTwenty[Math.trunc(number/100)]} hundred ${toTwenty[number%100]}`
                        } else if (number%10 === 0){
                            return `${toTwenty[Math.trunc(number/100)]} hundred ${tens[number%100 - number%10]}`;
                        } else {
                            return `${toTwenty[Math.trunc(number/100)]} hundred ${tens[number%100 - number%10]} ${toTwenty[number%10]}`;
                        }
            }
}
 
