const canvas = document.querySelector(".gCanvas");
log(canvas);
const ctx = canvas.getContext("2d");
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
const speed = 250;

/*            */
/*--- Game ---*/
/*            */

var snake;

function Game()
{
    this.score = 0;
    snake = new Snake();
    apple = new Apple();

    apple.eaten();
    log(apple);
    document.getElementById("gScore").innerHTML = this.score;
    
    this.clock = window.setInterval(() => 
    {
        if (clockRunning == true)
        {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            snake.update();
            apple.draw();
            snake.draw();

            if (snake.eat(apple)) 
            {
                apple.eaten();
                this.score += 25;
                document.getElementById("gScore").innerHTML = this.score;
            }  

            if(snake.checkCollision())    
            {
                alert("Your score was: " + this.score);
                this.score = 0;
                document.getElementById("gScore").innerHTML = this.score;
            }
        }
    }, speed);
    

    window.addEventListener('keydown', ((evt) =>
    {
        const direction = evt.key.replace('Arrow', '');
        log(direction);
        snake.changeDirection(direction);
    }))
}
