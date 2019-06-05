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
            //spl = line.replace(/[{}]/g, '')
            spl = line.split('=');
            if(spl.length<2) continue;
            var mykey = spl[0].toLowerCase().trim();
            var val = spl[1].trim().split('}')[0].replace('{', '');
            if(mykey=='author')
            {
                var auothrs = val.split('and');
                val='';
                for(j=0;j<auothrs.length;j++)
                {
                    tmp = auothrs[j].split(',');
                    val+=tmp[1]+' '+tmp[0];
                    if(j<auothrs.length-1) val+=', ';
                }
            }
            else if(mykey=='booktitle'){mykey = 'venue'; val = 'in '+ val;}
            else if(mykey=='journal') mykey = 'venue';
            else if(mykey=='organization') mykey = 'publisher';
            pub[mykey] = val;
        }
        mypubs.push(pub);
    }
    document.getElementById(divToFill).innerHTML = Format();
}

function Format()
{
    var st='';
    for(i=0;i<mypubs.length;i++)
    {
        var pub = mypubs[i];
        if(!('author' in pub)) continue;
        st += '<p>';
        st+=pub['author']+'. '+ pub['title']+'. <i>'+ pub['venue']+'</i>';
        if('volume' in pub) st+=', Vol. '+ pub['volume'];
        if('number' in pub) st+='('+ pub['number']+')';
        if('pages' in pub) st+=', pages '+ pub['pages'];
        if('year' in pub) st+=', '+ pub['year'];
        if('publisher' in pub) st+=', '+ pub['publisher'];
        st+='.</p>';
    }
    return st;
}




/*


function Format()
{
    var st='';
    for(i=0;i<mypubs.length;i++)
    {
        var pub = mypubs[i];
        st += '<p>';
        for(key in pub) st+=key+': '+ pub[key]+', ';
        st+='.</p>';
    }
    return st;
}

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
