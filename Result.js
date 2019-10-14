//powie czy wylosowane wczesniej da wygraną , jesli tak to co wygralismy
class Result{
    //metoda statyczna czyli odwołać sie do niej mozna tylko z poziomu klasy
    static moneyWinInGame(result,bid){//ile wygralismy w danej grze
        if(result) return 3*bid;
        else return 0; 
    }
    static checkWinner(draw){//czy przegralismy czy wygralismy,draw-to bedzie tablica obiektow z poprzendiego skryptu Draw 
        if(draw[0]===draw[1]&&draw[1]===draw[2] || draw[0]!==draw[1] && draw[1]!==draw[2] && draw[0]!==draw[2]){//gdy kolory te same lub kolory są rózne
            return true;
        }
        else return false;
    }
}
// tak dostajemy sie do statycznych metod piszemy obiekt.nazwametody(ewentualnie argumenty)
