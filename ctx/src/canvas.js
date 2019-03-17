document.addEventListener("DOMContentLoaded",() => {

    const canvas = document.querySelector(".canvas"), //add canvas and select ctx
        ctx = canvas.getContext("2d");

    let h = canvas.height = window.innerHeight, //css is bad for canvas,  do this or select width and height in HTML
        w = canvas.width = window.innerWidth;
        
        ctx.fillStyle = "black"; //if bg doesn't work
        ctx.fillRect(0, 0, w, h);

        bg = new Image(); // add this cool XP hill
        bg.src = 'src/img/bg.jpg'; 
        bg.onload = () => {
            ctx.drawImage(bg, 0, 0, w, h);
        }

        dialog = new Image();  //dialog window
        dialog.src = 'src/img/dialog.jpg'; 
        
        canvas.onmousemove = (event) =>{ //magic!!!
            let x = event.clientX,
                y = event.clientY;
                console.log(event.clientX + "  " + event.clientY);
                ctx.fillStyle = "red";
                ctx.drawImage(dialog, x, y, 268, 400);
                ctx.clearRect(x, y, 1, 1);       
        }
        ctx.translate(0.5, 0.5);//normalizze
})