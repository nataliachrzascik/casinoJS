//dane o grze liczbowe wszystkie wygrane,przegrali liczba gier itp
class Statistics{
    constructor(){//bid-stawka
        this.gameResults=[];
    }//do zmiennej nie mozemy odwołąć sie w prototypie ale do właściwości mozemy
    addGameToStatistics(win,bid){//stawka
        let gameResult={
            win,//to jest to samo co win:win
            bid
        }
        this.gameResults.push(gameResult);
    }
    showGameStatistics(){
        //nie zmieniamy tablicy gameResults tylko pracujemy na jej danymi
        //return [liczbaGier,liczbaWygranych,LiczbaPorażek]
        let games = this.gameResults.length;//tyle gier było
        let wins = this.gameResults.filter(result =>result.win).length;
        //filter wyszuka nam czy kazdy pojedynczy obiekt w tablicy gameResult np.{win:true,bid:2} ma true jak ma true to result.win zwróci true i do zmiennej wins sie przypisze długośc tablicy wins(wins bedzie długość tablicy obiektór które mają win:true)(bez lenght mielibysmy w zmiennej wins tablice obiktów ktorych win:true)
        let losses=this.gameResults.filter(result=>!result.win).length;
        
        return [games,wins,losses];
    }
}