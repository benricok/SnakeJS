function Snake()
{
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    this.draw = function() 
    {
        ctx.fillStyle = "#32CD32";

        for (let i=0; i<this.tail.length; i++)
        {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.update = function()
    {
        for (let i=0; i<this.tail.length -1; i++)
        {
            this.tail[i] = this.tail[i+1];
        }

        this.tail[this.total - 1] = { x: this.x, y: this.y };

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > canvas.width)
        {
            this.x = 0;
        }
        if (this.y > canvas.height)
        {
            this.y = 0;
        }
        if (this.x < 0)
        {
            this.x = canvas.width;
        }
        if (this.y < 0)
        {
            this.y = canvas.height;
        }
    }

    this.eat = function(apple)
    {
        log(apple);
        if(this.x === apple.x && this.y === apple.y)
        {
            this.total++;
            log("Apple was at - x: " + apple.x + "y: " + apple.y);
            return true;
        }
        return false;
    }

    this.checkCollision = function()
    {
        for(let i=0; i<this.tail.length; i++)
        {
            if (this.x === this.tail[i].x && this.y === this.tail[i].y)
            {
                this.tail = [];
                this.total = 0;
                return true;
            }
            else
            {
                return false;
            }
        }
    }

    this.changeDirection = function(direction)
    {
        direction = direction.toLowerCase();
        switch(direction)
        {
            case 'w':
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                break;
            case 's':
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;
            case 'a':
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
                break;
            case 'd':
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                break;
        }
    }
}

