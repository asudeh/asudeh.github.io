// Written by Abolfazl Asudeh, 3/12/2013

function menu() {
st='<p align="center"><img width="60%" src="ppl/abol.jpg" class="niceBox"></p>';
st+='<p style="padding-bottom:10px;border-bottom: 1px gray solid;" align="center"><font size="6vm">Abolfazl Asudeh</font><br><font size="vm">Ph.D., Computer Science</font><br><font size="3vm">Postdoctoral Research Fellow<br><a href="http://www.cse.umich.edu/" target=_blank>Department of Computer Science and Engineering</a><br><a href="http://www.umich.edu" target=_blank>University of Michigan Ann Arbor</a></font></p>';
st += '<div style="width:100%;" align="right"><ul id="cssmenu">';
st += '            <li><a href="index.htm">Home</a></li>';
st+='            <li><a href="research.htm">Research</a><span id="researchmenu"></span></li>';
st+='            <li><a href="exp.htm">Experience</a></li>';
st+='</ul></div>';
menuBar.innerHTML = st;
}