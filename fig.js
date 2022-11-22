var lienzo = document.getElementById("lienzo"); 
var cd = lienzo.getContext("2d");
var lienzo2 = document.getElementById("lienzo2"); 
var cd2 = lienzo2.getContext("2d");
function exhibirLineas(){
    var x = 20;
    var y = 20;
    var Ex = 1060;
    var Ey = 540;
    while(x <= Ex || y <= Ey){
        cd.strokeStyle = 'Cyan';
        cd.moveTo(x, 0);
        cd.lineTo(x, Ey);
        cd.moveTo(0, y);
        cd.lineTo(Ex, y);
        cd.stroke();
        y = y + 30;    
        x = x + 30;    
    }
    //plano Cartesiano
    //eje y
    var pex = Ex / 2;
    cd2.lineWidth = 2;
    cd2.strokeStyle = 'Black';
    cd2.moveTo(pex, 0);
    cd2.lineTo(pex, pex+10);
    cd2.stroke();
    //eje x
    var pey = Ey / 2;
    cd2.strokeStyle = 'Black';
    cd2.moveTo(0, pey-10);
    cd2.lineTo(Ex, pey-10);
    cd2.stroke();
    x = 20;
    y = 20;
    while(x <= Ex || y <= Ey){
        cd2.moveTo(x, pey-10);
        cd2.lineTo(x, pey);
        cd2.moveTo(pex+10,y);
        cd2.lineTo(pex, y);
        //cd2.fillText(Number, pex+11, y+2, 200);
        //cd2.fillText(Number, x, pey+20, 200);
        cd2.stroke();
        y = y + 30;    
        x = x + 30;    
    }
    x = 20;
    y = 20;
    var Number = 0;
    while(x <= Ex || y <= Ey){
        cd2.fillText("-"+Number, pex+12, pey-28+y, 200);
        cd2.fillText("-"+Number, pex+12, pey+28-y, 200);        
        Number = Number+1;
        y = y + 30;    
        x = x + 30;   
    }
}
function GetData(){
    var A, B, C, D, E, F, X1, X2, X3, X4;
    var nuevoArray = new Array();
    A = document.getElementById('A').value;
    B = document.getElementById('B').value;
    C = document.getElementById('C').value;
    D = document.getElementById('D').value;
    E = document.getElementById('E').value;
    F = document.getElementById('F').value;
    X1 = document.getElementById('X1').value;
    X2 = document.getElementById('X2').value;
    X3 = document.getElementById('X3').value;
    X4 = document.getElementById('X4').value;
    Hallar(A, B, C, D, E, F, X1, X2, X3, X4, nuevoArray)
}
function Hallar(a, b, c, d, e, f, x1, x2, x3, x4, arr){

        arr[0] = (a*f-d*c) / (a*e-d*b); //valor de Y
        arr[1] = (c - b*arr[0]) / a; //valor de X
        arr[2] = (c - a*x1) / b; //valor de y1
        arr[3] = (c - a*x2) / b; //valor de y2
        arr[4] = (f - d*x3) / e; //valor de y3
        arr[5] = (f - d*x4) / e; //valor de y4

        
        document.getElementById('REC1').innerHTML = a+"x + "+b+"y = "+c;
        document.getElementById('REC2').innerHTML = d+"x + "+e+"y = "+f;
        //document.getElementById('RX').innerHTML = "P3(x3, y3) = " + "(" + x3 + "," + arr[4] + ")";
        //document.getElementById('RY').innerHTML = "P4(x4, y4) = " + "(" + x4 + "," + arr[5] + ")";
        document.getElementById('RX').innerHTML = "X: "+arr[1];
        document.getElementById('RY').innerHTML = "Y: "+arr[0];

        if((a*f-d*c) == 0 && (a*e-d*b) == 0)
        {
                document.getElementById('contenido').innerHTML = "Tiende a ser infinito";
        }
        else if((a*e-d*b) == 0)
        {       
                document.getElementById('contenido').innerHTML = "No hay solucion";
        }
        else if((arr[0]) != 0)
        {
                document.getElementById('contenido').innerHTML = "(x, y) = " + "(" + arr[1] + "," + arr[0] + ")"; 
        }
}

window.onload = exhibirLineas();