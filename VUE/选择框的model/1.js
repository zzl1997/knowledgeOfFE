class my  extends Object{
    constructor(props) {
        super(props);
        this.a=1
    }

    myfunc(){
        console.log(this.a)
        console.log(1)
    }
}
let new1= new my()
new1.myfunc()
