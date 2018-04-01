

// nav_id.onclick = function(event) {
// 			var target = event.target; 	
// 			target.style.color = "red";		
// 			 if (target.tagName == "LI"){
			 	
// 			 }
// 			console.log(target.tagName);
// 		}



var selectedTd = document.getElementById('nav_id').getElementsByTagName('a');
var url = document.location.href;
for (var i = 0; i < selectedTd.length; i++){
	if (url == selectedTd[i].href){
		selectedTd[i].parentNode.className += " act";
		// console.log(selectedTd[i].parentNode)
		// var olo = selectedTd[i].parentNode;
		// olo.style.background = '#7D2AE8';
	}
}
