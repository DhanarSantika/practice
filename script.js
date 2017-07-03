function Test(){
	paragraph = ["According to all known laws of aviation","There is no way that a bee should be able to fly","Its wings are too small to get its fat little body off the ground","The bee, of course, flies anyways","Because bees don't care what humans think is impossible"];
	len = paragraph.length;
	text = "";
	for(i=0;i<len;i++){
		text += paragraph[i];
		if(i!=len-1){
			text += "<br><br>";
		}
	}
	document.getElementById("demo").innerHTML = text;
}
