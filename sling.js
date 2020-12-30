class SlingShot{
constructor(bodyA,bodyB){
    var options={
        bodyA: bodyA,
        bodyB: bodyB,
        stiffness: 0.4,
        length: 20
      
    }
    this.sling= Matter.Constraint.create(options);
    World.add(world,this.sling);
}
display(){

    var Pa= this.sling.bodyA.position;
    var Pb= this.sling.bodyB.position;
    push();
    stroke("black");
    strokeWeight(5);
    line(Pa.x,Pa.y,Pb.x,Pb.y);
    pop();
}

}