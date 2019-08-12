// Written by Abolfazl Asudeh, 3/12/2013

function menu() {
st='<p align="center"><img width="60%" src="ppl/abol.jpg" class="niceBox"></p>';
st+='<p style="padding-bottom:10px;border-bottom: 1px gray solid;" align="center"><font size="6vm">Abolfazl Asudeh</font><br><font size="vm">Ph.D., Computer Science</font><br><font size="3vm">Assistant Professor<br><a href="http://cs.uic.edu/" target=_blank>Department of Computer Science</a><br><a href="http://www.uic.edu" target=_blank>University of Michigan Illinois at Chicago</a></font></p>';
st += '<div style="width:100%;" align="right"><ul id="cssmenu">';
st += '            <li><a href="index.htm">Home</a></li>';
st += '            <li><a href="pub.htm">Publications</a></li>';
//st+='            <li><a href="research.htm">Research</a><span id="researchmenu"></span></li>';
st+='            <li><a href="exp.htm">Professional Experiences</a></li>';
st+='</ul></div>';
st+='<h3>Links</h3>';
st += '<div style="width:100%;" align="right"><ul id="cssmenu">';
st += '            <li><a href="http://mithra.eecs.umich.edu" target="_blank">Mithra</a></li>';
st+='</ul></div>';
st+='<div>&nbsp;</div>';
/*
st+='<div width="80%" style="padding-top:10px;border-top: 1px gray solid;">'
st+='<h3>Link to Projects:</h3>';
st+='<p style="text-align:center;"><a target="_blank" href="http://mithra.eecs.umich.edu"><img src="imgs/mithra.png" width="30%"/></a></p>';
st+='</div>';
*/
menuBar.innerHTML = st;
}