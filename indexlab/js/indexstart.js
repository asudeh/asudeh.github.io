function header(path='') {
st = '<nav class="navbar navbar-expand-lg navbar-light bg-light"> ';
st += '<a class="navbar-brand" href="projects.htm" style="color:#ffcb05;"> ';
//st += '        <img src="'+path+'imgs/home.ico" height="40pt" alt="Home!">';
st += '        <img src="'+path+'imgs/InDeXLab2.gif" height="40pt" alt="Home!">';
st += '</a> ';
st += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> ';
st += '  <span class="navbar-toggler-icon"></span> ';
st += '</button> ';
st += '<div class="collapse navbar-collapse" id="navbarSupportedContent"> ';
st += '  <ul class="navbar-nav mr-auto"> ';
st+= '     <li class="nav-item dropdown">';
st+= '        <a class="nav-link dropdown-toggle" href="'+path+'projects.htm" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
st+= '          Projects';
st+= '        </a>';
st+= '        <div class="dropdown-menu" aria-labelledby="navbarDropdown">';
st+= '          <a class="dropdown-item" href="'+path+'projects.htm">Summary</a>';
st+= '          <hr>';
st+= '          <a class="dropdown-item" href="'+path+'mithra.htm">Mithra</a>';
st+= '          <a class="dropdown-item" href="'+path+'ranking.htm">Ranking & Representatives</a>';
st+= '          <a class="dropdown-item" href="'+path+'orca.htm">Orca</a>';
st+= '        </div>';
st += '    </li> ';
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