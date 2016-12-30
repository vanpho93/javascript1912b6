class Point {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
}

class Line {
  constructor(p1, p2){
    if(p1.x == p2.x && p1.y == p2.y){
      throw new Error('2 diem cua 1 doan thang khong trung nhau')
    }
    this.p1 = p1;
    this.p2 = p2;
  }
  getLength(){
    var dx = this.p1.x - this.p2.x;
    var dy = this.p1.y - this.p2.y;
    return Math.sqrt(dx*dx + dy*dy);
  }
}
try{
  var line = new Line(new Point(0, 0), new Point(0, 0));
  console.log(line.getLength());
}catch(e){
  console.log(e + '');
}
console.log('Chay xong roi');
