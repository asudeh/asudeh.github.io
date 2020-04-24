function fillContent(File, divToFill=''){
    if(divToFill=='') 
    {
        alert(1)
        return this.innerHTML='test';
    }
    var request = new XMLHttpRequest();
    request.open('GET', File, true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            if(divToFill=='') return this.innerHTML='test';//request.responseText;
            return document.getElementById(divToFill).innerHTML=request.responseText;
        }
    }
}