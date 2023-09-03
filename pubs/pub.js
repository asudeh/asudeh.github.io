// Abolfazl Asudeh
// http://cs.uic.edu/~asudeh
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

function Format()
{ // play with this file to change the formatting
    groupby = document.getElementById("GroupBy").value;
    var hash = {};
    var counts = {};
    for(i=0;i<mypubs.length;i++)
    {
        var pub = mypubs[i];
        if(!('author' in pub)) continue;
        st = '<li>';
        if('type' in pub) st+='&nbsp;<span class="pubtype">('+ pub['type']+')</span>';
        st+=pub['author']+'. ';
        if('url' in pub)  st+='<a target="_blank" href="'+ pub['url']+'">';
        st+=pub['title'];
        if('url' in pub)  st+='</a>';
        st+='. In <b>'+ pub['venue']+'</b>';
        //st+=pub['author']+'. '+ pub['title']+'. <i>'+ pub['venue']+'</i>';
        if('volume' in pub) st+=', Vol. '+ pub['volume'];
        if('number' in pub) st+='('+ pub['number']+')';
        if('pages' in pub) st+=', pages '+ pub['pages'];
        if('year' in pub) st+=', '+ pub['year'];
        if('publisher' in pub) st+=', '+ pub['publisher']+'.';
        if('slides' in pub) st+='&nbsp;<span class="coderepo"><a target="_blank" href="'+ pub['slides']+'">[slides]</a></span>';
        if('code' in pub) st+='&nbsp;<span class="coderepo"><a target="_blank" href="'+ pub['code']+'">[code]</a></span>';
        if('award' in pub)
            for(j=0;j<pub['award'].length;j++)
                st+='&nbsp;&#x1F3C6;<span class="pubaward">'+ pub['award'][j]+' </span>';
        st+='</li>';
        key = pub[groupby];
        if(typeof(key)=='object')
        {
            for(j=0;j<key.length;j++)
            {
                if(!(key[j] in hash)) {hash[key[j]]=st; counts[key[j]]=1;} 
                else {hash[key[j]]= hash[key[j]]+ st; counts[key[j]]=counts[key[j]] + 1;} 
            }
        }
        else{
            if(!(key in hash)) {hash[key]=st; counts[key]=1;} 
            else {hash[key]= hash[key]+ st; counts[key]=counts[key] + 1;} 
        }
    }
    if(groupby=='year') Skeys = sortedkeys(hash,false);
    else sorted_keys = sortedkeys(counts,true);

    // create/format the return string
    retSt='';
    for(i=0;i<sorted_keys.length;i++)
    {
        retSt+='<div><H3>'+sorted_keys[i]+'</H3><ol class="publist">';
        retSt+= hash[sorted_keys[i]]+'</ol></div>';
    }
    return retSt;
}



//--------------------- private functions, you don't need to use these ------------------------

function Parse(st, divToFill)
{ //Converts a bib file to its publication entries
    // reset the global variables
    mypubs = [];
    myhashIndex = [];
    myhashVals = [];
    // start arsing the string
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
                    //case 'code': pub['code']= spl[1]+":"+spl[2];
                    //break;
                    case 'award': pub['award'] = spl[1].trim().split(";");
                    break;
                    default: pub[spl[0].toLowerCase()]= spl[1]+":"+spl[2];
                }
                continue;
            }
            //spl = line.replace(/[{}]/g, '')
            spl = line.split(/=(.+)/);
            //spl = line.split('=');
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
            else if(mykey=='journal'||mykey=='booktitle') mykey = 'venue';
            else if(mykey=='organization') mykey = 'publisher';
            pub[mykey] = val;
        }
        mypubs.push(pub);
    }
    document.getElementById(divToFill).innerHTML = Format();
}

function sortedkeys(dict,SortByVal=true)
{
    var items = Object.keys(dict).map(function(key) {return [key, dict[key]];});
    if(SortByVal) 
        items.sort(function(first, second) {return second[1] - first[1];});
    else 
        items.sort(function(first, second) {return second[0] - first[0];});
    sorted_keys = [];
    for(i=0; i<items.length; i++){
        sorted_keys.push(items[i][0]);
    }
    return sorted_keys;
}

