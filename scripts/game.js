/*            */
/*--- Game ---*/
/*            */

var snake;

function Game()
{
    snake = new Snake();

    if (clockRunning == True)
    {
        window.setInterval(() => 
        {
            snake.update();
            snake.draw();
        }, 250);
    }
}
