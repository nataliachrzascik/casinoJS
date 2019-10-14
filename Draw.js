//tworzy obiekt za kazdym razem jak klikniemy zakręć - obiekt przyporzadkuje kolor w 3 okienkach,klasa ta odpowiedzialna bedzie  za losowanie

class Draw{
    constructor(){
        this.options = ['red','green','blue'];
        let _result=this.drawResult();//to bedzie z losowania
        //po to tworzymy tą metode getDaweResult zebysmy mogli sie posługiwać zmienną _result poza zakresem konstruktora
        this.getDrawResult=()=>_result;
    }
    drawResult(){
        let colors=[];
        //uzupełnianie poprzez losowanie
        for(let i=0;i<this.options.length;i++){
            const index = Math.floor(Math.random()*this.options.length);//losowanie 0,1 albo 2
            const color=this.options[index];
            colors.push(color);
        }
        return colors
    }
}