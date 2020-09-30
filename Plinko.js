class Plinko{
     constructor(x, y) {
            var options = {
                'restitution':0.4,
                
            }
            this.body = Bodies.rectangle(x, y, 10, options);
            
            this.r = 10;
            World.add(world, this.body);
          }
          display(){
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            ellipseMode(CENTER);
            ellipse(0, 0, this.r, this.r);
            pop();
          }
    }
