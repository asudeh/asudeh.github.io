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
    constructor(title, authors,venue,year,type=null,topicString,page=null,vol=null,number=null,publisher=null,awardString=null) {
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