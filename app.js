//2
var num;
var length;
var i = 1;
function MultiTable(num, length =10){
    document.write("Multiplication table: "+ num);
    for(i = 1; i <= length; i++)
     document.write("<br>"+i+" * "+num+" = " +(i * num)); 

}

MultiTable(10);

//3

Shape = {
    type: 'Shape',
    getType: function (){ return this.type;}
  }
  
  function Triangle( a, b, c){
      this.a = a;
      this.b = b;
      this.c = c;
      this.type = 'Triangle';
  }
  
  Triangle.prototype = Shape; 
  
  Triangle.prototype.constructor = Triangle;
  
  Triangle.prototype.getPerimeter = function (){
    console.log('Perimeter');
    return this.a + this.b + this.c;
  }
  
  var t = new Triangle(1,2,3);
  console.log(t.constructor === Triangle);
  console.log(Shape.isPrototypeOf(t));      
  console.log(t.getPerimeter());            
  console.log(t.getType());

  var e = 1;

  for(e=1; e<=3; e++){
      console.log(e,this.t);
  }

  Array.prototype.shuffle = function() {
    var len = this.length,
    shuffleArr = [];
    for ( var i = 0; i < len; i++ ) {
    var elem = this,
    pos = Math.floor( Math.random() * len );
        
    if ( shuffleArr[pos] == undefined) {
    shuffleArr[pos] = elem
    shuffleArr.push(elem);
        } }return shuffleArr;
        }
        var toShuffle =[1,2,3,4,5,6,7,8,9];
    
        toShuffle.shuffle()

        console.log(toShuffle.shuffle())