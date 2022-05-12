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
                1 : "I",
                2 : "II",
                3 : "III",
                5 : "V",
                10 : "X",
                50 : "L",
                100 : "C",
                500 : "D",
                1000 : "M",
                4 : "IV",
                20 : "XX",
                30 : "XXX",
                40 : "XL",
                9 : "IX"
            }
            res = romans[number];
            return res;
        }
    }

}

export {Convertisseur}