class Bob{
    constructor(x,y){
        var option={
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
        this.body=Bodies.circle(x,y,25,option);
        this.x=x;
        this.y=y;
        World.add(world,this.body);
    }
    display(){
        fill("pink");
        ellipse(this.body.position.x,this.body.position.y,50,50);
    }
}