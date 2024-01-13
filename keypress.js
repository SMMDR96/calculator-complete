       function handleKeyPress(event){
            if(event.key === "1"){
                document.getElementById("result").innerHTML=Fnum;
            }else if(event.key === "2"){
                document.getElementById("result").innerHTML=Snum;
            }else if(event.key === "3"){
                document.getElementById("result").innerHTML=Thnum;
            }else if(event.key === "4"){
                document.getElementById("result").innerHTML=Ftnum;
            }else if(event.key === "5"){
                document.getElementById("result").innerHTML=Fthnum;
            }else if(event.key === "6"){
                document.getElementById("result").innerHTML=Sthnum;
            }else if(event.key === "7"){
                document.getElementById("result").innerHTML=Sevthnum;
            }else if(event.key === "8"){
                document.getElementById("result").innerHTML=Ethnum;
            }else if(event.key === "9"){
                document.getElementById("result").innerHTML=Nthnum;
            }else if(event.key === "0"){
                document.getElementById("result").innerHTML=Znum;
            }else if(event.key === "+"){
                document.getElementById("result").innerHTML=addition;
            }else if(event.key === "-"){
                document.getElementById("result").innerHTML=substraction;
            }else if(event.key === "*"){
                document.getElementById("result").innerHTML=astrick;
            }
        }
        document.addEventListener('keydown',handleKeyPress);