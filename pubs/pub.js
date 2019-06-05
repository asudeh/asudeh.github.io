// Abolfazl Asudeh
// http://asudeh.github.io
// June 2019

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


function Parse(st)
{ //Converts a bib file to its publication entries
    alert('1');
    var mypubs = [];
    entries = st.trim().split('@');
    for(var l in entries)
    {
        atoms = entries[l].split('\n');
        var title=null, authors=null, venue=null, year=null, type=null, topics=null, page=page, vol=null, number=null, publisher=null, awards=null;
        for(i=1;i<atoms.length;i++)
        {
            line = atoms[i].trim();
            if(line[0]=='%')
            {
                spl = line.substring(2, line.length).split(':');
                alert(spl[0].toLowerCase());
                switch(spl[0].toLowerCase())
                {
                    case 'topic': topics = spl[1];
                    break;
                    case 'type': type = spl[1];
                    alert(type);
                    break;
                    case 'award': awards = spl[1];
                }
                continue;
            }
        }
        mypubs.push(new Pub(title=title, authors=authors,venue=venue,year=year,type=type,topicString=topics,page=page,vol=vol,number=number,publisher=publisher,awardString=awards));
    }
    return mypubs;
}

function ReadBib(bibFile)
{ // Reads a bib file and passes it to the parser
    var request = new XMLHttpRequest();
    request.open('GET', bibFile, true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            return Parse(request.responseText);
        }
    }
}