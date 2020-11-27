class Chain{
    constructor(bodyA,bodyB,offsetx,offsety){
        this.offsetx = offsetx
        this.offsety = offsety
        var option = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB : {x:this.offsetx, y: this.offsety},
            stiffness: 1 ,
            length: 200
        }
    this.chain = Constraint.create(option)
    World.add(world,this.chain)
    }
    display(){
        var posA = this.chain.bodyA.position
        var posB = this.chain.bodyB.position
        strokeWeight(4)
       var anchor1x = posA.x
       var anchor1y = posA.y

       var anchor2x = posB.x+ this.offsetx
       var anchor2y = posB.y+this.offsety
        line(anchor1x,anchor1y,anchor2x,anchor2y)
    }
}