function handlekeypress(event){

    const keyMap = {
        "1" : "1", "2" : "2", "3" : "3","4" : "4", "5" : "5", 
        "6" : "6", "7" : "7", "8" : "8", "9" : "9", "0" : "0",
        "Enter" : eval , "Escape" : "", "+" : "+", "/" : "/",
        "-":"-", "*" : "*"
    };

    const key = event.key;
    const display = document.getElementsByName('display')[0];

    if (keyMap[key] !== undefined){
        if(key === "Enter"){
            display.value = keyMap[key](display.value);
         }else if (key === "Escape") {
             display.value = "";
        }else{
            display.value += keyMap[key];
        }
    }
    
}
document.addEventListener('keydown', handlekeypress);