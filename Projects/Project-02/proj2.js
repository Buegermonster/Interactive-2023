const canvas=document.getElementById('Canvas');
const elements=canvas.getContext('2d');
const balls=[];
// const color=

//定位大小
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const centerX=canvas.width / 2;
const centerY=canvas.height / 2;

let bigBallr=20;
let bigBalltrans=1;

class Ball{
    constructor(x, y, r, c) {
        this.x=x;
        this.y=y;
        this.r=r;
        this.c=c;
    }
//画小球
    draw(elements){
        elements.beginPath();
        elements.ellipse(this.x, this.y, this.r, this.r, 0, 0, Math.PI * 2, false);
        elements.fillStyle=this.c;
        elements.fill();

    }
}


//画800个
    for(let i =0; i< 1000; i++) {
        const r=Math.floor(Math.random()*15);
         const x=Math.random()*(canvas.width-r*2)+r;
          const y=Math.random()*(canvas.height-r*2)+r;
           const c = `rgba(255,160,131,${Math.random()*0.5+0.3})`;

balls.push(new Ball(x,y,r,c));
    }




function animate(){
    elements.clearRect(0, 0, canvas.width, canvas.height);

    for (let i=0;i<balls.length;i++) {
        const ball=balls[i];
        const disX=centerX-ball.x;
        const disY=centerY-ball.y;
        const dis=Math.sqrt(disX*disX+disY*disY);

            if (dis < bigBallr + ball.r) {
                ball.x+= disX*0.008;
                ball.y+= disY*0.008;


            if (dis < bigBallr -ball.r) {
                balls.splice(i,1);
                i--;
            }
        }

        ball.draw(elements);
    }
//画大球
        elements.beginPath();
        elements.arc(centerX,centerY,bigBallr,0,Math.PI * 2,false);
        elements.fillStyle =`rgba(255,101,54,${bigBalltrans})`;
        elements.fill();


        requestAnimationFrame(animate);
}


    animate();

    // 滚轮变大，透明
    window.addEventListener('wheel',function(event){
        if (event.deltaY>0) {
                if (bigBallr<1000) {
                    bigBallr+=3;
                    bigBalltrans-=0.003
                }
            
        if (bigBalltrans<0) {
                bigBalltrans=0;
            }
        }

});

