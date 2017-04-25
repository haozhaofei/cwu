
//幻灯片

var wenzi = document.getElementById("wenzi").document.getElementsByTagName("p");

var list= document.getElementById("list").getElementsByTagName("img");
	for(var j=0;j<list.length;j++){
		var i=1;
		list[j].onmouseover = function(){
			document.getElementById("mid").src = this.src;
			if(j==i-1){
          		wenzi[j].style.display="block";
     		}else{
     	  		wenzi[j].style.display="none";
     		}
		}
	}


//左右箭头
	var i=1;
	var prev = document.getElementById("lt");
	var next = document.getElementById("rt");
	
	function prev(){

   }
   function next(){

   }