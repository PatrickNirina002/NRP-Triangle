       
        function triangle(){
            var m =document.getElementById("rado").value;
            var a =parseInt(m);
            var n =document.getElementById("fab").value;
            var b =parseInt(n); 
            
            
            var tab = [a];
            if   (a<10){
                document.getElementById("patrick").innerHTML="";
            for(var i =0;i<b;i++){
                for(var j= 0;j<i+1;j++){
                    document.getElementById("patrick").innerHTML+=tab[j];
                        if(j == i){
                                a=a+1;
                                document.getElementById("patrick").innerHTML+="<br>";
                                tab.push(a);
                                }
                    }
                }
            }
            else{
                document.getElementById("patrick").innerHTML="error";
            }

        }