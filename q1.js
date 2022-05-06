class Shape{
    length;
    breadth;
    height;
    constructor(length,breadth,height){
        this.length=length;
        this.breadth=breadth;
        this.height=height;
    }
    Area(){
        return this.length*this.breadth*this.height;
    }
}

let sape=new Shape(10,12,15);
console.log(sape.Area());