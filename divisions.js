class Division {
    constructor(x) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,600,10,200,options);
      this.width = 10;
      this.height = 200;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
