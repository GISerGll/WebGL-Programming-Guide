//vertax shader program
var VSHADER_SOURCE =
    'void main() {\n' +
    'gl_Position = vec4(0.5,0.5,0.0,1.0);\n'+
    'gl_PointSize = 10.0;\n'+
    '}\n';
//fragment shader program
var FSHADER_SOURCE =
    'void main () {\n' +
    'gl_FragColor = vec4(1.0,0.0,0.0,1.0);\n' +
    '}\n';

function main() {
    //get canvas
    var canvas = document.getElementById('webgl');
    if(!canvas){
        console.error('failed to get the canvas with id"webgl"');
        return;
    }
    //get the rendering context for WebGL
    var gl = getWebGLContext(canvas)
    if(!gl){
        console.error('Failed to get ther rendering context for WebGL');
        return;
    }

    //初始化着色器
    if(!initShaders(gl,VSHADER_SOURCE,FSHADER_SOURCE)){
        console.error('Failed to initialize the shaders.')
        return;
    }

    gl.clearColor(0,0,0,1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.POINTS,0,1);
}