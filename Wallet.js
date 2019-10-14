class Wallet{
    constructor(money){
        let _money=money;
        //musimy uzyc wartosci z let tutaj a nie w prototypie bo tam juz nie bedzie istniała
        //pobieranie aktualnej zawartości portfela
        this.getWalletValue=()=> _money;
        
        //sprawdzanie czy uzytkownik ma odpowiadnią ilośc pieniedzy zeby zagrac
        this.checkCanPlay=value=>{//mamy 1 parametr value wiec nie musimy pisac (value)
            if(_money>=value) return true;//jesli z ifa bedzie prawda to zwróci return true i nie pojdzie dalej  i nie zwróci juz false
            return false;
        }
        this.changeWallet=(value,type="+")=>{
            //domyslnie dodawanie do naszego portfela
            //(ile,dodaj albo usun z portfela)
            if(typeof value==="number" && !isNaN(value)){
                if(type ==="+"){
                    return _money+=value;
                }
                else if(type==="-"){
                    return _money-=value;
                }
                else{
                    throw new Error("nieprawidłowy typ działania");//obiekt błędu wypisze sie bład w konsoli
                }
            }
            else{
                throw new Error("nieprawidłowa liczba");
            }
    }
    
}
}
