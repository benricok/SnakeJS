const canvas = document.querySelector(".gCanvas");
log(canvas);
const ctx = canvas.getContext("2d");
const scale = 40;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
var score = 0;


/*            */
/*--- Game ---*/
/*            */

var snake;

function Game()
{
    snake = new Snake();
    apple = new Apple();

    apple.eaten();
    log(apple);
    document.getElementById("gScore").innerHTML = score;
    
    this.clock = window.setInterval(() => 
    {
        if (clockRunning == true)
        {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            snake.update();
            snake.draw();
            apple.draw();

            if (snake.eat(apple)) 
            {
                apple.eaten();
                score += 25;
                document.getElementById("gScore").innerHTML = score;
            }        
            snake.checkCollision();
        }
    }, 250);
    

    window.addEventListener('keydown', ((evt) =>
    {
        const direction = evt.key.replace('Arrow', '');
        log(direction);
        snake.changeDirection(direction);
    }))
}
