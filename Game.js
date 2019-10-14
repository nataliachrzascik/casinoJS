//klasa spajająca reszte klas 
class Game{
    constructor(start){
        //tworzenie instancji klas satistics i wallet
        this.stats=new Statistics();
        this.wallet = new Wallet(start);
        
        document.getElementById("start").addEventListener('click',this.startGame.bind(this));
        //po to to bind zeby nizej  w startGame thisem był Game a nie jak tam by było button
        this.spanWallet=document.querySelector(".panel span.wallet");
        this.boards=document.querySelectorAll("div.color");
        this.inputBid=document.getElementById("bid");
        this.spanResult=document.querySelector(".score span.result");
        this.spanGames=document.querySelector(".score span.number");
        this.spanWins=document.querySelector(".score span.win");
        this.spanLosses=document.querySelector(".score span.loss");
        
        this.render();
    }
    //metoda render bedzie wyswietlać nowe infirmacje(kolory, stawka,srodki na koniec ,ile gier ,wygrane,przegrane)
    render(colors=['grey','grey','grey'],money=this.wallet.getWalletValue(),result="",stats=[0,0,0],bid=0,wonMoney=0){//domyslnie ile pieniedzy(na poczatku) i ile gier(wygr,przegr)
        //bedzie tyle co przekazalismy w main.js potem poprzez start z konstruktora aż tutaj
        //z draw bierzemy tablice z listą kolorów
        this.boards.forEach((board,index)=>{
            board.style.backgroundColor=colors[index];
        })
        //ile mamy pieniedzy
        this.spanWallet.textContent=money;
        if(result){
            result=`Wygrałeś ${wonMoney} $.`;
        }
        else if(!result && result!==""){
            result=`Przegrałeś ${bid} $.`;
        }
        this.spanResult.textContent=result;
        //ile gier
        //w stats[liczbagier,wygranegry,przegranegry]
        this.spanGames.textContent=stats[0];
        this.spanWins.textContent=stats[1];
        this.spanLosses.textContent=stats[2];
        
        this.inputBid.value="";
    }
    //start game bedzie sie wywoływac gdy klikamy przycisk z zakładem
    startGame(){
        //ta metoda najpierw bedzie sprawdzała czy wartosc stawki któą podalismy jest wieksza lub równa 1
        //tutaj było przed dodaniem bind do pobranego przycisku u góry console.log(this) //<button id="start"Zakręć!</button>
        //""<1 //true bo ""konwertowany jest na 0
        //juz problem z thisem jest rozwiązany bo zrobilismy bind
        if(this.inputBid.value<1) return alert('Kwota, którą chcesz grać jest za mała!');//w tym wypadku zakonczenie startgame metody
        const bid=Math.floor(this.inputBid.value);//math.floor opróćz tego za zaokrągla to tez zmieni nam tutaj typ zmiennej z string na number
        
        if(!this.wallet.checkCanPlay(bid)){
            return alert("Masz za mało środków lub podana została nieprawidłowa wartość");
        }
        this.wallet.changeWallet(bid,"-");
        
        this.draw= new Draw();//obiekt losowania
        const colors=this.draw.getDrawResult();//wynik losowania
        //tu w win nie piszemy this tylko odwołujemy sie do metody bo była ona statyczna
        const win = Result.checkWinner(colors);//czy jest wygrana
        const wonMoney = Result.moneyWinInGame(win,bid);//ile wygralimsy 0 lub kwote jakąś
        this.wallet.changeWallet(wonMoney,"+");
        this.stats.addGameToStatistics(win,bid);//win jest trua albo false
        this.render(colors,this.wallet.getWalletValue(),win,this.stats.showGameStatistics(),bid,wonMoney);
        //mozna przekazac metode zamiast wartości w argumencie i to co było w return bedzie przypisane jako argument
        
        
    }
}