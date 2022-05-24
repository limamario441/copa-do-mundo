let counter = 1;

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
counter++;

    if(counter > 4){
        counter = 1;
    }

    document.getElementById('radio'+ counter).checked = true
},5000);

