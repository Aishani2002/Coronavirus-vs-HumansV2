class Stethoscope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.stetho1 = loadImage('Coronavirus/stethoscope1.png');
        this.stetho2 = loadImage('Coronavirus/stethoscope2.png');
        this.stetho3 = loadImage('Coronavirus/stethoscope3.png');
        this.pointB = pointB
        this.stetho = Constraint.create(options);
        World.add(world, this.stetho);
    }
    attach(body){
        this.stetho.bodyA = body;
    }
    
    fly(){
        this.stetho.bodyA = null;
    }

    display(){
        image(this.stetho1,200,20);
        image(this.stetho2,170,20);
        if(this.stetho.bodyA){
            var pointA = this.stetho.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.stetho3,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.stetho3,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
        }
    }
    
}