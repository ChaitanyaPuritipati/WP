var jsnobj = [{
	"question": "Each Computer has a built in instructions set that it knows how to execute by design",
	"choices": [true, false],
	"correctans" : true,
	"hints" : ["Recall that we use the term computation to mean the execution of a sequence of instructions by a computer with the information of solving a given problem","Computation can be used to mean the sequence of computer instructions"],
	"afteranstxt": 'Each computer has a set of primitive instructions that is "wired" to execute. We call this instruction set of the computer.' 
   },
   {
   	"question": "The computer uses intelligence to execute instructions",
	"choices": [true, false],
	"correctans" : false,
	"hints" : ["Recall that we said a computer executes the instructions given to it mechanically","Mechanically we can execute the instructions in computer"],
	"afteranstxt" : 'A computer executes instructions automatically.its main task is to simplify execute the instructions given to it and remember their results as the computation goes on. the part that may require intelligence is exptressing a corputation in terms of instructions.' 
   },
   {
   	"question": "Full form of ADS is Always Die Slowly",
	"choices": [true, false],
	"correctans" : false,
	"hints" : ["Think in terms of Computer words","Base of Programs"],
	"afteranstxt" : 'Algorithms are set of instructions for every programs and Data Structures are used to efficiently store the data for every program.' 
   },
   {
   	"question": "Keyboard is an example of Input device",
	"choices": [true, false],
	"correctans" : true,
	"hints" : ["Input devices are the devices which are used to input the data","Input devices can be Mouse, Mic, Files etc.."],
	"afteranstxt" : 'Keyboards are used to enter the input manually. This input can be later turned into various forms.' 
   },
   {
   	"question": "A computer uses Octal type of number system to calculate and to store data",
	"choices": [true, false],
	"correctans" : false,
	"hints" : ["It is least possible even number","It uses zeros and ones only"],
	"afteranstxt" : 'Binary system contains uses only zeros and ones. It converts every data into binary system and transfer them through the cables.' 
}
];
loadquestions();
function loadquestions() {
	var len = jsnobj.length;
	for( i = len; i > 0; i--) {

		// FOR question

		var str = '<div id = \"question' + i +   '" class="jumbotron jumbotron-fluid" style = "border-radius: 15px; background-color: white;"></div';
		var body = document.getElementById("quesbody");
		body.insertAdjacentHTML('afterend', str);
		var quebody = document.getElementById("question"+i);
		var quecontainer = '<div id = \"cont'+i+ '" class="container"></div';
		quebody.insertAdjacentHTML('afterbegin', quecontainer);
		var quescont = document.getElementById("cont"+i);
		var questext = '<h4 id = "ques'+ i + '"> Q'+ i +') '+ jsnobj[i-1].question +'</h4>';
		quescont.insertAdjacentHTML('afterbegin', questext);
		var questext = document.getElementById("ques"+i);
		
		// FOR HINT
		
		var hintstr = '<p><button id = "hintbut'+i+'"class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample'+i+'" aria-expanded="false" aria-controls="collapseExample">\
   			 Hint\
  			</button>\
				</p>\
				<div class="collapse" id="collapseExample' + i +'">\
				  <div class="card card-body">\
				  <div id = "hinttext' + i + '" class = "row">\
				    <p>' + jsnobj[i - 1].hints[0] +'</p>\
				    <br>\
				  </div>\
				  <div class = "row">\
				  	<div class = "col-md-6">\
				  		<button id = "p'+ i +'"type="button" class="btn btn-primary" style = "float:right;" onclick = "hinttextchange(this)" disabled>Previous</button>\
				  	</div>\
				  	<div class = "col-md-6">\
				  		<button id = "n' + i +'"type="button" class="btn btn-primary" onclick = "hinttextchange(this)" >Next</button>\
				  	</div>\
				  </div>\
				  </div>\
				</div>';
		questext.insertAdjacentHTML('afterend', hintstr);
		
		// FOR OPTIONS
		var optionstr = '<div id = "true'+i+'" class="radio"><label><input id = "t'+i+'" type="radio" name="optradio" value = "true" onclick = "optionvalidation(this)">TRUE</label></div>'
		var hintcard = document.getElementById("collapseExample"+i);
		hintcard.insertAdjacentHTML('afterend', optionstr);
		var optionstrf = '<div id = "false'+i+'"class="radio"><label><input id = "f'+i+'" type="radio" name="optradio" onclick = "optionvalidation(this)">FALSE</label></div>'
		var trueopt = document.getElementById("true"+i);
		trueopt.insertAdjacentHTML('afterend', optionstrf);
		
		// FOR FEEDBACK
		
		var wrongalert = '<div id = "wrongalert'+i+'"class="alert alert-danger" role="alert" style = "display: none;">\
  			<p> <strong>Incorrect!</strong> ' + jsnobj[i - 1].afteranstxt + '</p>\
			</div>';
        var falseopt = document.getElementById("false"+i);
        falseopt.insertAdjacentHTML('afterend', wrongalert);

        var rightalert = '<div id = "rightalert'+i+'"class="alert alert-success" role="alert" style = "display: none;">\
  			<p> <strong>Correct!</strong> ' + jsnobj[i - 1].afteranstxt + '</p>\
			</div>';
        var wrong = document.getElementById("wrongalert" + i);
        wrong.insertAdjacentHTML('afterend', rightalert);
	}
};

// TO CHANGE HINTS

function hinttextchange(button) {
	console.log(button);
	var splitid = button.id.split("");
	console.log(splitid);
	if(splitid[0] == "p") {
		console.log(jsnobj[splitid[1] - 1]);
		document.getElementById("hinttext" + splitid[1]).innerHTML = jsnobj[splitid[1] - 1].hints[0];
		document.getElementById("n" + splitid[1]).disabled = false;
		document.getElementById("p"+splitid[1]).disabled = true;
	} else {
		document.getElementById("hinttext" + splitid[1]).innerHTML = jsnobj[splitid[1] - 1].hints[1];
		document.getElementById("p"+splitid[1]).disabled = false;
		document.getElementById("n"+splitid[1]).disabled = true;
	}
};

// FOR CHECKING OPTIONS

function optionvalidation(radio) {
	var splitansid = radio.id.split("");
	var userans = false;
	if(splitansid[0] == "t") {
		userans = true;
	}
	if(userans == jsnobj[splitansid[1]-1].correctans) {
		document.getElementById("rightalert"+splitansid[1]).style.display = "block";
		document.getElementById("f"+splitansid[1]).disabled = true;
		document.getElementById("t" + splitansid[1]).disabled = true;
		document.getElementById("hintbut"+ splitansid[1]).disabled = true;
	} else {
		document.getElementById("wrongalert"+splitansid[1]).style.display = "block";
		document.getElementById("f"+splitansid[1]).disabled = true;
		document.getElementById("t" + splitansid[1]).disabled = true;
		document.getElementById("hintbut"+ splitansid[1]).disabled = true;
	}
};

// FOR RESET TEST

function resettest() {
	var totalques = jsnobj.length;
	for(i = totalques; i > 0; i--) {
		document.getElementById("question"+i).remove();
	}
	loadquestions();
}		
