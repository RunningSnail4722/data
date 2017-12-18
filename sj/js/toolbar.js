$(document).ready(function(){


	var del=document.getElementById("del");
	del.onclick=function(){
		var inps=document.getElementsByClassName("inp");
		for(var i=0;i<inps.length;i++){
			if(inps[i].checked==true){
				var f=inps[i].parentNode.parentNode;
				f.parentNode.removeChild(f);
			}
		}
	}
	var modify=document.getElementById("modify");
	modify.onclick=function(){
		var inps=document.getElementsByClassName("inp");
		for(var i=0;i<inps.length;i++){
			if(inps[i].checked==true){
				var f=inps[i].parentNode.parentNode;
				f.parentNode.removeChild(f);
				var xmlhttp;
				if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
					xmlhttp=new XMLHttpRequest();
				}else{// code for IE6, IE5
					xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
				}
				xmlhttp.onreadystatechange=function(){
					if (xmlhttp.readyState==4 && xmlhttp.status==200){
				    	document.getElementById("tab").innerHTML=xmlhttp.responseText;
				    }
				}
				xmlhttp.open("GET","AddTo.html",true);
				xmlhttp.send();
			}
		}
	}
	
	var add=document.getElementById("add");
	add.onclick=function(){
		var xmlhttp;
			if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp=new XMLHttpRequest();
			}else{// code for IE6, IE5
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange=function(){
				if (xmlhttp.readyState==4 && xmlhttp.status==200){
					
			    	document.getElementById("tab").innerHTML=xmlhttp.responseText; 
			    }
			}
			xmlhttp.open("GET","AddTo.html",true);
			xmlhttp.send();
	}
})
