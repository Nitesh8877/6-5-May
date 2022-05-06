class Shape{
    #length;
    #breadth;
    #height;
    constructor(){
        console.log("This is My constructor.....");
    }

    SetData(length,breadth,height){
        this.#length=length;
        this.#breadth=breadth;
        this.#height=height;
    }
    Getlength(){
        return this.#length;
    }
    GetBreadth(){
        return this.#breadth;
    }
    GetHeight(){
        return this.#height;
    }
    Area(){
        return this.#length*this.#breadth*this.#height;
    }

}
let obj=new Shape();
console.log(obj);
obj.SetData(10,12,15);
console.log(obj.Area());
console.log(obj.Getlength());
console.log(obj.GetBreadth());
console.log(obj.GetHeight());