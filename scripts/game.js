const canvas = document.querySelector(".gCanvas");
log(canvas);
const ctx = canvas.getContext("2d");
const scale = 5;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
var score = 0;
const points = 25;
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
    

    if (clockRunning == true)
    {
        window.setInterval(() => 
        {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            snake.update();
            snake.draw();
            apple.draw();

            if (snake.eat(apple)) 
            {
                apple.eaten();
                log("Eaten");
                score += points;
                log(score);
                document.getElementById("gScore").innerHTML = score;
            }

        }, 200);
    }

    window.addEventListener('keydown', ((evt) =>
    {
        const direction = evt.key.replace('Arrow', '');
        log(direction);
        snake.changeDirection(direction);
    }))
}
