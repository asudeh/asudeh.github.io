function fillContent(File, divToFill){
    var request = new XMLHttpRequest();
    request.open('GET', File, true);
    //request.open('GET', 'https://asudeh.github.io/pubs/abol.bib', true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            return document.getElementById(divToFill).innerHTML=request.responseText;
        }
    }
}