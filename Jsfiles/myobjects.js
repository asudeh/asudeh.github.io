// Abolfazl Asudeh, 3/2/2018
function setup(ele,name)
{
	ele.innerHTML = '<a class="text" target="_blank" href="'+getURL(name)+'">'+getname(name)+', '+getaff(name)+'</a>';
	//ele.addEventListener("click", function(){clear(ele)});
}

function clear(ele)
{
	ele.innerHTML='';
}

function getURL(name){
switch(name){
	case "gautam":
		return "http://ranger.uta.edu/~gdas/";
	case "jag":
		return "http://web.eecs.umich.edu/~jag/";
	case "divesh":
		return "http://www.research.att.com/people/Srivastava_Divesh/custom/index.html";
	case "nan":
		return "https://faculty.ist.psu.edu/nan/";
	case "sara":
		return "http://saravananthirumuruganathan.appspot.com/";
	case "azade":
		return "https://sites.google.com/site/azadenazi/";
	case "nick":
		return "http://koudas01.utsc.utoronto.ca/~koudas/";
	case "cli":
		return "http://ranger.uta.edu/~cli/";
	case "zaruba":
		return "http://crystal.uta.edu/~zaruba/";
	case "julia":
		return "https://www.cs.drexel.edu/~julia/";
	case "sajal":
		return "http://en.wikipedia.org/wiki/Sajal_K._Das";
	case "yeye":
		return "https://www.microsoft.com/en-us/research/people/yeyehe/";
	case "sona":
		return "https://www.linkedin.com/in/sona-hasani-62577b8";
	case "farhad":
		return "https://sites.google.com/site/farhadrahmanbappy/";
	case "ning":
		return "http://idir.uta.edu/~nyan/"
	case "nafi":
		return "http://cs.olemiss.edu/~nhassan";
	case "kris":
		return "https://www.microsoft.com/en-us/research/people/krisgan/";
	case "gensheng":
		return "http://idir.uta.edu/~zhang/";
	case "movaghar":
		return "http://sharif.edu/~movaghar/";
	default:
		return "#";
	}
}

function getaff(name){
switch(name){
	case "abol":
		return "";
	case "gautam":
		return "University of Texas at Arlington";
	case "jag":
		return "University of Michigan";
	case "divesh":
		return "AT&T Research Labs";
	case "nan":
		return "Penn State University";
	case "sara":
		return "QCRI";
	case "azade":
		return "Microsoft Research";
	case "nick":
		return "University of Toronto";
	case "cli":
		return "University of Texas at Arlington";
	case "zaruba":
		return "University of Texas at Arlington";
	case "julia":
		return "Drexel University";
	case "sajal":
		return "Missouri University";
	case "yeye":
		return "Microsoft Research";
	case "sona":
		return "University of Texas at Arlington";
	case "farhad":
		return "University of Texas at Arlington";
	case "ning":
		return "Huawei U.S. R&D Center";
	case "nafi":
		return "University of Mississippi";
	case "kris":
		return "Microsoft Research";
	case "gensheng":
		return "Google";
	case "movaghar":
		return "Sharif University of Technology";
	case "ali1":
		return "Qatar University";
	default:
		return "University of Texas at Arlington";
	}
}	

function getname(name){
switch(name){
	case "abol":
		return "Abolfazl Asudeh";
	case "gautam":
		return "Gautam Das";
	case "jag":
		return "H. V. Jagadish";
	case "divesh":
		return "Divesh Srivastava";
	case "nan":
		return "Nan Zhang";
	case "sara":
		return "Saravanan Thirumuruganathan";
	case "azade":
		return "Azade Nazi";
	case "nick":
		return "Nick Koudas";
	case "cli":
		return "Chengkai Li";
	case "zaruba":
		return "Gergely Zaruba";
	case "julia":
		return "Julia Stoyanovich";
	case "sajal":
		return "Sajal K. Das";
	case "yeye":
		return "Yeye He";
	case "sona":
		return "Sona Hasani";
	case "farhad":
		return "Farhadur Rahman";
	case "ning":
		return "Ning Yan";
	case "nafi":
		return "Naeemul Hassan";
	case "kris":
		return "Kris Gangam";
	case "movaghar":
		return "Ali Movaghar";
	case "gensheng":
		return "Gensheng Zhang";
	case "jees":
		return "Jees Augustine";
	case "yeshwanth":
		return "Yeshwanth D Gunasekaran";
	case "ali1":
		return "Ali Jaoua";
	}
}		