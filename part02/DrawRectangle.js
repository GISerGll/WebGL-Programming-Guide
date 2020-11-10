function main() {
    //获取canvas
    var canvas = document.getElementById('example');
    if(!canvas){
        console.log('failed to retrieve the canvas element!');
        return;
    }

    //获取二维绘制图形的上下文
    var ctx = canvas.getContext('2d');

    //绘制蓝色矩形
    ctx.fillStyle = 'rgba(0,0,255,1)';
    ctx.fillRect(120,10,150,150);
}