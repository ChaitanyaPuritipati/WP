var key = "enjoy";
var commentarr = [];
function submission() {
	var nameval = document.getElementById('formGroupExampleInput').value;
	var commentval = document.getElementById('comment').value;
	var secretkeyval = document.getElementById('secretkey').value;
	if(nameval === "" ||commentval === "" || secretkeyval === "") {
		document.getElementById("commentform").reset();
		document.getElementById("errorbox").style.display = "block";
		document.getElementById("errortext").innerHTML = "*** All fields should be filled ***";
	} else if(secretkeyval != key){
	    document.getElementById("errorbox").style.display = "block";
		document.getElementById("errortext").innerHTML = "*** Wrong Key ***";		
		document.getElementById("commentform").reset();
	} else {
		document.getElementById("errorbox").style.display = "none";
		document.getElementById("displaycomment").style.display = "block";
		document.getElementById("commentform").reset();
		var commentdata = {"name": nameval, "comment": commentval};
		commentarr.push(commentdata);
	    var lenarr = commentarr.length;
		var paragraph = document.getElementById("displaycomment");
		var commentstr = '';
		for(var i = lenarr - 1; i >= 0; i--) {
			commentstr +=
 				'<h4>' + commentarr[i].comment +'</h4>' +
 				'<span class="badge badge-pill badge-light">'+ commentarr[i].name +'</span>' +
 				'<hr>'; 
		}
		paragraph.innerHTML = commentstr;
	}
}