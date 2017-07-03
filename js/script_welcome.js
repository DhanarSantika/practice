var x = 0;

function Spoiler(){
	if(x%2==0){
		PutParagraph();
		x += 1;
	}else{
		DeleteParagraph();
		x -= 1;
	}
}

function PutParagraph(){
	paragraph = ["According to all known laws of aviation","There is no way that a bee should be able to fly","Its wings are too small to get its fat little body off the ground","The bee, of course, flies anyways","Because bees don't care what humans think is impossible"];
	link = "Homepage";
	len = paragraph.length;
	text = "";
	button = "Close";
	for(i=0;i<len;i++){
		text += paragraph[i];
		if(i!=len-1){
			text += "<br><br>";
		}
	}
	document.getElementById("card").innerHTML = text;
	document.getElementById("cardlink").innerHTML = link;
	document.getElementById("button").innerHTML = button;
}

function DeleteParagraph(){
	text = "";
	button = "Read";
	document.getElementById("card").innerHTML = text;
	document.getElementById("cardlink").innerHTML = text;
	document.getElementById("button").innerHTML = button;
}
