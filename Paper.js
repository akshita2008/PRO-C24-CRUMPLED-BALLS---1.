class Paper{

    constructor(x,y,r){

        var options={
            isStatic:false,
            restitution: 0.3,
            friction:1.2,
            density:0.5
        }

        this.x=x;
        this.y=y;
        this.r=r;
        this.body= Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }


    display(){

        var paperpos= this.body.position;
        var angle= this.body.angle;
        push();
        translate(paperpos.x,paperpos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(3);
        fill(255,0,255);
        ellipse(0,0,this.r,this.r);
        pop();
        
    }
}