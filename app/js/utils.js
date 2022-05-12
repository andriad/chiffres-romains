class Convertisseur {
    constructor (){

    }

    arabicToRoman(number){
        let res = "";
        if(number >= 4000){
            throw new Error("Number too high : " + number);
        }
        switch(number) {
            case 1:
                res = "I"
                break;
            case 2:
                res = "II"
                break;
            case 3:
                res = "III"
                break;
            case 5:
                res = "V"
                break;
            case 10:
                res = "X"
                break;
            case 50:
                res = "L"
                break;
            case 100:
                res = "C"
                break;
            case 500:
                res = "D"
                break;
            case 1000:
                res = "M"
                break;
        }
        return res;
    }

}

export {Convertisseur}