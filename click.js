        var Fnum=1;
         var Snum=2;
        var Thnum=3;
        var Ftnum=4;
        var Fthnum=5;
        var Sthnum=6;
        var Sevthnum=7;
        var Ethnum=8;
        var Nthnum=9;
        var Znum=0;
        var Hashtag="#";
        var astrick="x";
        var substraction="-";
        var addition="+"
    function press1(){
    document.getElementById("result").innerHTML=Fnum
    }
    function press2(){
    document.getElementById("result").innerHTML=Snum
        }
        function press3(){
    document.getElementById("result").innerHTML=Thnum
            }
            function press4(){
    document.getElementById("result").innerHTML=Ftnum
                }
                function press5(){
    document.getElementById("result").innerHTML=Fthnum
                    }
                    function press6(){
                        document.getElementById("result").innerHTML=Sthnum
                        }
                        function press7(){
                            document.getElementById("result").innerHTML=Sevthnum
                            }
                            function press8(){
                                document.getElementById("result").innerHTML=Ethnum
                                }
                                function press9(){
                                    document.getElementById("result").innerHTML=Nthnum
                                    }
                                    function press0(){
                                        document.getElementById("result").innerHTML=Znum;
                                        }
                                        function presshtg(){
                                            document.getElementById("result").innerHTML="#"
                                            }
                                            function pressAss(){
                                                document.getElementById("result").innerHTML="*"
                                                }
                                                function pressPluss(){
                                                    document.getElementById("result").innerHTML="+"
                                                    }
                                                    function pressminus(){
                                                        document.getElementById("result").innerHTML="-"
                                                        }
                                                        function pressmutiply(){
                                                            document.getElementById("result").innerHTML="x"
                                                            }
                                                        document.addEventListener('keydown', handleKeyPress)                           