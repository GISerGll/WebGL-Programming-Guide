function main() {
    //get canvas
    var canvas = document.getElementById('example');

    //get webgl
    var gl = getWebGLContext(canvas);
    if(!gl){
        console.log('failed to get the rendering context for WebGL');
        return;
    }

    gl.clearColor(0.5,0.5,0.5,1);
    gl.clear(gl.COLOR_BUFFER_BIT);
}