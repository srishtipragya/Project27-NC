class Rope{
    constructor(bodyBob,bodyRoof,offsetRoofX,offsetRoofY){
        this.offsetX=offsetRoofX;
        this.offsetY=offsetRoofY;
        var option={
            bodyA:bodyBob,
            bodyB:bodyRoof,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffnes:0.04,
            length:200
        }
        this.rope=Constraint.create(option);
        World.add(world,this.rope);
    }
   display(){
       var pointA=this.rope.bodyA.position;
       var pointB=this.rope.bodyB.position;
       line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
   } 
}