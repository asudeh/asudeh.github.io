// Written by Abolfazl Asudeh, 3/12/2013

function menu() {
st = '<nav id="cssmenu"><ul>';
st += '            <li><a href="index.htm">Home</a><br></li>';
st+='            <li><a href="education.htm">Education</a><br></li>';
st+='            <li><a href="research.htm">Research</a><br></li>';
st+='            <li><a href="exp.htm">Experiments</a><br></li>';
st+='            <li><a href="misc.htm">Misc.</a><br></li>';
st+='            <li><a href="codes.htm">Useful Stuff</a><br></li>';
//st+='            <li><a target="_blank" href="cv_2.pdf">CV</a><br></li>';
//st+='            <li><a href="farsi.htm">Farsi</a><br></li>';
st+='</ul></nav>';
menuBar.innerHTML = st;
}