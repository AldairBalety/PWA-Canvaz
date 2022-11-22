

arr = new Array(6);
function sol(a,b,c,d,e,f,x1,x2,x3,x4, arr){

        arr[0] = (a*f-d*c) / (a*e-d*b); //valor de Y
        arr[1] = (c - b*arr[0]) / a; //valor de X
        arr[2] = (c - a*x1) / b; //valor de y1
        arr[3] = (c - a*x2) / b; //valor de y2
        arr[4] = (f - d*x3) / e; //valor de y3
        arr[5] = (f - d*x4) / e; //valor de y4

        
        document.getElementById('resultadox1').innerHTML = "P1(x1, y1) = " + "(" + x1 + "," + arr[2] + ")";
        document.getElementById('resultadox2').innerHTML = "P2(x2, y2) = " + "(" + x2 + "," + arr[3] + ")";
        document.getElementById('resultadox3').innerHTML = "P3(x3, y3) = " + "(" + x3 + "," + arr[4] + ")";
        document.getElementById('resultadox4').innerHTML = "P4(x4, y4) = " + "(" + x4 + "," + arr[5] + ")";

        if((a*f-d*c) == 0 && (a*e-d*b) == 0)
        {
                document.getElementById('res2').innerHTML = "Tiende a ser infinito";
        }
        else if((a*e-d*b) == 0)
        {       
                document.getElementById('res2').innerHTML = "No hay solucion";
        }
        else if((arr[0]) != 0)
        {
                document.getElementById('res2').innerHTML = "(x, y) = " + "(" + arr[1] + "," + arr[0] + ")"; 
        }
}



sol(2,-1, 5,1,4,7,-2,5,-7,12,arr);