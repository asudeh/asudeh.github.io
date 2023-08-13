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
	case "abol": return "https://www.cs.uic.edu/~asudeh/";
	case "fn": return "https://fnargesian.com/";
	case "gautam": return "http://ranger.uta.edu/~gdas/";
	case "jag": return "http://web.eecs.umich.edu/~jag/";
	case "nan": return "https://faculty.ist.psu.edu/nan/";
	case "azade": return "https://sites.google.com/site/azadenazi/";
	case "julia": return "https://engineering.nyu.edu/faculty/julia-stoyanovich";
	case "gerome": return "https://people.cs.umass.edu/~miklau/";
	case "bill": return "https://faculty.washington.edu/billhowe/";
	case "mohsen": return "https://linkedin.com/in/mohsen-dehghankar-b92788158";
	case "nima": return "https://scholar.google.com/citations?user=Q4P6b34AAAAJ";
	case "rishi": return "https://rishi-advani.com/";
	case "sana": return "https://www.linkedin.com/in/sana-ebrahimi-872382131";
	case "mahdi": return "https://www.linkedin.com/in/merfanian/";
	default:
		return "#";
	}
}

function getaff(name){
switch(name){
	case "abol": return "University of Illinois Chicago";
	case "fn": return "University of Rochester";
	case "gautam":
	case "suraj": return "University of Texas at Arlington";
	case "nan": return "Penn State University";
	case "azade": return "Google Brain";
	case "julia":
	case "ke": return "New York University";
	case "gerome": return "University of Massachusetts, Amherst";
	case "bill": return "University of Washington";
	case "jag":
	case "mark":
	case "yifan":
	case "pranav": return "University of Michigan";
	case "yeshwanth": return "Google";
	default:
		return "University of Illinois Chicago";
	}
}	

function getname(name){
switch(name){
	case "abol": return "Abolfazl Asudeh";
	case "fn": return "Fatemeh Nargesian";
	case "gautam": return "Gautam Das";
	case "jag": return "H. V. Jagadish";
	case "nan": return "Nan Zhang";
	case "azade": return "Azade Nova";
	case "julia": return "Julia Stoyanovich";
	case "gerome": return "Gerome Miklau";
	case "bill": return "Bill Howe";
	case "ke": return "Ke Yang";
	case "mark": return "Zhongjun (Mark) Jin";
	case "chenkai": return "Chenkai Sun";
	case "yifan": return "Yifan Guan";
	case "pranav": return "Pranav Mayuram";
	case "hasti": return "Hasti Sharifi";
	case "danyal": return "Danyal Saeed";
	case "ian": return "Ian Swift";
	case "nima": return "Nima Shahbazi";
	case "ainaz": return "Ainaz Jamshidi";
	case "matteo": return "Matteo Corain";
	case "yeshwanth": return "Yeshwanth D. Gunasekaran";
	case "suraj": return "Suraj S Shetiya";
	case "niccolo": return "Niccolo Spagnuolo";
	case "melika": return "Melika Mousavi";
	case "sana": return "Sana Ebrahimi";
	case "rishi": return "Rishi Advani";
	case "aliF": return "Ali Farajzadeh";
	case "mohsen": return "Mohsen Dehghankar";
	case "mahdi": return "Mohammad Mahdi Erfanian";
	default: return "";
	}
}		