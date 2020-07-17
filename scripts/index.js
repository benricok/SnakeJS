var debug = true;
var clockRunning = false;

/*                */
/*--- Debuging ---*/
/*                */

function log(log) 
{
    if (debug == true)
    {
        console.log(log);
    }
}

/*          */
/*--- UI ---*/
/*          */

function Menu()
{
    log("Menu() called");
    document.getElementById("Menu").style.display = "block";
    document.getElementById("Game").style.display = "none";
    document.getElementById("Settings").style.display = "none";
}

function SwitchViewMenu()
{
    document.getElementById("Menu").style.display = "none";
    document.getElementById("Game").style.display = "none";
    document.getElementById("Settings").style.display = "block";
}

function StartGame()
{
    log("startGame() called");
    document.getElementById("Menu").style.display = "none";
    document.getElementById("Game").style.display = "block";
    document.getElementById("Settings").style.display = "none";

    game = new Game();

}

function StopGame()
{
    clockRunning = false;
    if (window.confirm("Are you sure you want to exit the game?"))
    {
        Menu();
    }
    else
    {
        clockRunning = true;
    }
}

/*            */
/*--- Game ---*/
/*            */

function Game()
{
    var canvas = document.getElementById("GameUI");
}