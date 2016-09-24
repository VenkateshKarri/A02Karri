function iphonecalculator(){
    var i6= document.forms["iphonecalc"]["q1"].value;
    var i6s= document.forms["iphonecalc"]["q2"].value;;
    var i7= document.forms["iphonecalc"]["q3"].value;;
    var t1= 700*i6;
    var t2= 800*i6s;
    var t3= 750*i7;
    if(i6==NaN && i6s==NaN && i7==NaN ){
        alert("Please Choose any one mobile to checkout.!!");    
    }
    else if(i6s==NaN && i7==NaN ){
        var t4=t1;
    }
    else if(i6==NaN  && i7==NaN ){
        var t4=t2;
    }
    else if(i6==NaN && i6s==NaN ){
        var t4=t3;
    }
    else{
        var t4=t1+t2+t3;
    }
    
    alert("Your Bill is $"+ t4);
    return t4;
}