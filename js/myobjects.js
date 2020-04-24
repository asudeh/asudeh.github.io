// Abolfazl Asudeh, 3/2/2018
function setup(ele,name)
{
	ele.innerHTML = '<a class="persontext" target="_blank" href="'+getURL(name)+'">'+getname(name)+'<br/>'+getaff(name)+'</a>';
	//ele.innerHTML = '<span class="tooltiptext"><a class="text" target="_blank" href="'+getURL(name)+'">'+getname(name)+', '+getaff(name)+'</a></span>';
	//ele.innerHTML = '<a class="text" target="_blank" href="'+getURL(name)+'">'+getname(name)+', '+getaff(name)+'</a>';
	//ele.addEventListener("click", function(){clear(ele)});
}

function getURL(name){
switch(name){
	case "abol":
		return "http://cs.uic.edu/~asudeh";
	case "gautam":
		return "http://ranger.uta.edu/~gdas/";
	case "jag":
		return "http://web.eecs.umich.edu/~jag/";
	case "nan":
		return "https://faculty.ist.psu.edu/nan/";
	case "azade":
		return "https://sites.google.com/site/azadenazi/";
	case "julia":
		return "https://engineering.nyu.edu/faculty/julia-stoyanovich";
	case "gerome":
		return "https://people.cs.umass.edu/~miklau/";
	case "ke":
		return "https://keyangatdrexel.github.io/";
	case "bill":
		return "https://faculty.washington.edu/billhowe/";
	case "mark":
		return "https://markjin1990.github.io/";
	case "pranav":
		return "https://www.linkedin.com/in/pranavmayuram";
	default:
		return "#";
	}
}

function getaff(name){
switch(name){
	case "gautam":
		return "University of Illinois at Chicago";
	case "gautam":
		return "University of Texas at Arlington";
	case "nan":
		return "Penn State University";
	case "azade":
		return "Google AI";
	case "julia":
		return "New York University";
	case "gerome":
		return "University of Massachusetts, Amherst";
	case "bill":
		return "University of Washington";
	case "ke":
		return "Drexel University";
	default:
		return "University of Michigan";
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
	case "nan":
		return "Nan Zhang";
	case "azade":
		return "Azade Nazi";
	case "julia":
		return "Julia Stoyanovich";
	case "gerome":
		return "Gerome Miklau";
	case "bill":
		return "Bill Howe";
	case "ke":
		return "Ke Yang";
	case "mark":
		return "Zhongjun (Mark) Jin";
	case "chenkai":
		return "Chenkai Sun";
	case "yifan":
		return "Yifan Guan";
	case "pranav":
		return "Pranav Mayuram";
	}
}		