function header(path='') {
st = '<nav class="navbar navbar-expand-lg navbar-light bg-light"> ';
st += '<div class="collapse navbar-collapse" id="navbarSupportedContent"> ';
st += '  <ul class="navbar-nav mr-auto"> ';
st += '    <li class="nav-item active"> ';
st += '      <a class="nav-link" href="'+path+'index.htm">Home <span class="sr-only">(current)</span></a> ';
st += '    </li> ';
st += '    <li class="nav-item active"> ';
st += '      <a class="nav-link" href="'+path+'pub.htm">Publications <span class="sr-only">(current)</span></a> ';
st += '    </li> ';
st+= '     <li class="nav-item dropdown">';
st+= '        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
st+= '          Teaching';
st+= '        </a>';
st+= '        <div class="dropdown-menu" aria-labelledby="navbarDropdown">';
st+= '          <a class="dropdown-item" href="'+path+'teaching/cs501spring20/index.html" target="_blank">CS501 Spring 2020</a>';
st+= '          <hr>';
st+= '          <a class="dropdown-item" href="'+path+'teaching/cs401fall19/index.html" target="_blank">CS401 Fall 2019</a>';
st+= '        </div>';
st += '  </ul> ';
st += '</div> ';
st += '</nav> ';
/*
st = '<table width="100%" id="header">';
st+= '        <tr>';
st+= '            <td width="10pt">&nbsp;</td>';
st+= '            <td><img src="assets/mithra.png" height="52px"/></td>';
st+= '            <td style="font-size:16pt; text-align:left; vertical-align: bottom; color:white; font-family:fantasy">Where Data Management meets Responsibility!</td>';
st+= '            <td class="menue" align="right">';
st+= '                <a href="index.htm">&#9751; Home</a><span width="10pt">&nbsp;&nbsp;&nbsp;</span>';
st+= '                <a href="papers.htm">&#9776; Publication</a><span width="10pt">&nbsp;&nbsp;&nbsp;</span>';
st+= '                <!--<a href="projects.htm">&#9741; Projects</a><span width="10pt">&nbsp;&nbsp;&nbsp;</span>-->';
st+= '                <a href="tools.htm">&#9732; Tools</a><span width="10pt">&nbsp;&nbsp;&nbsp;</span>';
st+= '                <a href="about.htm">&#9737; About</a>';
st+= '            </td>';
st+= '            <td width="10pt">&nbsp;</td>';
st+= '        </tr>';
st+= '</table>';
*/
headerDiv.innerHTML = st;
}