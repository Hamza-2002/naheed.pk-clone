function myFun(){
    var b = /^[A-za-z]+$/;
    var a = document.getElementById("name").value;

    if(a==''){
        document.getElementById("valid").innerHTML="no blank space are alowed";
        return false;
    }

    if (a.match(b)){
        true;
    else{
            document.getElementById("valid").innerHTML="only alphabet are avaialbe";
            return false;
        }
    }

    
}


var a = new Array();


a[0]="hamza";
a[1]="atta";
a[2]="khan";
a[3]="bilal";
a[4]="asad";

alert(a);
