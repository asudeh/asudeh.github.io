const sitePagesForSitemap = [
  '',
  'pub.htm',
  'awards.htm',
  'services.htm',
  'teaching/archive.html',
  'teaching/archive/cs516spring25/index.html',
  'teaching/archive/cs501fall21/index.html',
  'teaching/archive/cs480fall25/index.html'
];

const mainNavLinks = [
  { href: 'index.htm', label: 'Home' },
  { href: 'pub.htm', label: 'Publications' },
  { href: 'https://www.cs.uic.edu/~indexlab/', label: 'InDeX Lab', absolute: true }
];

const projectDropdownLinks = [
  {
    href: 'https://www.cs.uic.edu/~indexlab/nsf-iis-2348919/index.html',
    label: 'NSF IIS-2348919 | Fairness-aware Data Structures',
    absolute: true
  },
  {
    href: 'https://www.cs.uic.edu/~indexlab/efficient-on-device-llm-inference/index.html',
    label: 'Efficient and Private On-device LLM Inference',
    absolute: true
  }
];

const teachingDropdownLinks = [
  { href: 'teaching/archive/cs516spring25/index.html', label: 'CS516 (Algorithmic Fairness) Spring 2025' },
  { href: 'teaching/archive/cs501fall21/index.html', label: 'CS501  (Algorithms II) Fall 2021' },
  { href: 'teaching/archive/cs480fall25/index.html', label: 'CS480  (Database Systems) Fall 2025' }
];

const secondaryNavLinks = [
  { href: 'awards.htm', label: 'Awards' },
  { href: 'services.htm', label: 'Services' }
];

function navItem(link, path) {
  const href = link.absolute ? link.href : path + link.href;
  return '    <li class="nav-item active"> '
    + '      <a class="nav-link" href="' + href + '">' + link.label + '<span class="sr-only">(current)</span></a> '
    + '    </li> ';
}

function dropdownItem(link, path) {
  const href = link.absolute ? link.href : path + link.href;
  return '          <a class="dropdown-item" href="' + href + '" target="_blank">' + link.label + '</a>';
}

function header(path='') {
st = '<nav class="navbar navbar-expand-lg navbar-light bg-light"> ';
st += '<a class="navbar-brand" href="https://www.cs.uic.edu/~indexlab/" style="color:#ffcb05;"> ';
st += '        <img src="'+path+'imgs/InDeXLab.gif" height="40pt" alt="InDex Lab!"> ';
//st += '        <img src="'+path+'imgs/InDeXLab2.gif" height="40pt" alt="Home!">';
st += '</a> ';
st += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> ';
st += '  <span class="navbar-toggler-icon"></span> ';
st += '</button> ';
st += '<div class="collapse navbar-collapse" id="navbarSupportedContent"> ';
st += '  <ul class="navbar-nav mr-auto"> ';
for (const link of mainNavLinks) {
st += navItem(link, path);
}
//st += '    <li class="nav-item active"> ';
//st += '      <a class="nav-link" href="https://www.cs.uic.edu/~indexlab/projects.htm">Projects <span class="sr-only">(current)</span></a> ';
//st += '    </li> ';
//st += '    <li class="nav-item active"> ';
//st += '      <a class="nav-link" target="_blank" href="https://medium.com/@a.asudeh">Research Blog<span class="sr-only">(current)</span></a> ';
//st += '    </li> ';
//st += '    <li class="nav-item active"> ';
//st += '      <a class="nav-link" href="'+path+'teaching/archive.html">Teaching<span class="sr-only">(current)</span></a> ';
//st += '    </li> ';
st+= '     <li class="nav-item dropdown">';
st+= '        <a class="nav-link dropdown-toggle" id="fundedProjectsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
st+= '          Active Projects';
st+= '        </a>';
st+= '        <div class="dropdown-menu" aria-labelledby="fundedProjectsDropdown">';
for (const link of projectDropdownLinks) {
st+= dropdownItem(link, path);
}
st+= '        </div>';
st += '    </li> ';
st+= '     <li class="nav-item dropdown">';
st+= '        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
st+= '          Teaching';
st+= '        </a>';
st+= '        <div class="dropdown-menu" aria-labelledby="navbarDropdown">';
for (const link of teachingDropdownLinks) {
st+= dropdownItem(link, path);
}
st+= '          <hr>';
st+= '          <a class="dropdown-item" href="'+path+'teaching/archive.html" target="_blank">Archive</a>';
st+= '        </div>';
st += '    </li> ';
for (const link of secondaryNavLinks) {
st += navItem(link, path);
}
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
