// Abolfazl Asudeh
// http://asudeh.github.io
// June 2019

var mypubs = [];

function ReadBib(bibFile, divToFill)
{ // Reads a bib file and passes it to the parser
    var request = new XMLHttpRequest();
    request.open('GET', bibFile, true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            return Parse(request.responseText, divToFill);
        }
    }
}



//--------------------- private functions, you don't need to use these ------------------------

function Parse(st, divToFill)
{ //Converts a bib file to its publication entries
    mypubs = [];
    entries = st.trim().split('@');
    for(var l in entries)
    {
        var pub = {}
        atoms = entries[l].split('\n');
        for(i=1;i<atoms.length;i++)
        {
            line = atoms[i].trim();
            if(line[0]=='%')
            {
                spl = line.substring(2, line.length).split(':');
                //alert(spl[0].toLowerCase());
                switch(spl[0].toLowerCase())
                {
                    case 'topic': pub['topic'] = spl[1].trim().split(";");
                    break;
                    case 'type': pub['type']= spl[1];
                    break;
                    case 'award': pub['award'] = spl[1].trim().split(";");
                }
                continue;
            }
        }
        mypubs.push(pub);
    }

    /*
    for(i=0;i<mypubs.length;i++)
    {
        var st = '';
        var pub = mypubs[i];
        for (var key in pub) st+=(key+': '+pub[key]+', ');
        alert(st);
    }
    */
    //return mypubs;
    alert(Format());
    document.getElementById(divToFill).innerHTML = Format();
}

function Format()
{
    var st='';
    for(i=0;i<mypubs.length;i++)
    {
        st += '<p>';
        var pub = mypubs[i];
        for (var key in pub) st+=(key+': '+pub[key]+', ');
        st+='</p>';
    }
    return st;
}




/*
class Author{
    constructor(AuthorSt) {
        var res = AuthorSt.trim().split(",");
        this.name = res[1];
        this.lastname = res[0];
    }
    sayHi() {alert('Hi, I am '+this.name+ ' ' + this.lastname);}
    print(){return this.name+ ' ' + this.lastname;}
}

class Pub {
    constructor(title=null, authors=null,venue=null,year=null,type=null,topicString=null,page=null,vol=null,number=null,publisher=null,awardString=null) {
        this.title = title;
        this.authors = authors;
        this.venue = venue;
        this.year=year;
        this.type=type;
        this.topics=topicString.trim().split(";");
        this.page=page;
        this.vol = vol;
        this.number = number;
        this.publisher = publisher;
        this.awards = awardString.trim().split(";");
    }
}
*/
