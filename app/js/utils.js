class Convertisseur {
    constructor (){

    }

    arabicToRoman(number){
        let res = "";
        
        if(number >= 4000){
            throw new Error("Number too high : " + number);
        }

        if(number <= 0) {
            return "";
        }
        else{
            const romans = {
                1000 : "M",
                900 : "CM",
                500 : "D",
                400 : "CD",
                100 : "C",
                90 : "XC",
                50 : "L",
                40 : "XL",
                30 : "XXX",
                20 : "XX",
                10 : "X",
                9 : "IX",
                5 : "V",
                4 : "IV",
                3 : "III",
                2 : "II",
                1 : "I",
            }
            //res = romans[number];
            
            const lettre = Object.values(romans).reverse();
            const arabic = Object.keys(romans).reverse();

            arabic.forEach((numKey, i) => {
                while(number >= numKey) {
                    number -= numKey;
                    res += lettre[i]
                }
            })

            return res;
        }
    }

}

export {Convertisseur}