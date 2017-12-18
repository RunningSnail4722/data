$(document).ready(function(){	
	
	function one(){
		var cLeft=document.getElementById("cLeft");
		var tits=cLeft.getElementsByClassName("tit");
		var lists=cLeft.getElementsByClassName("list");
		for(var i=0;i<lists.length;i++){
			tits[i].index=i;
			lists[i].style.display="none";
			tits[i].onclick=function(){
				var img0=this.getElementsByTagName("img")[0];
				if(lists[this.index].style.display=="none"){
					this.style.borderBottom="1px solid #e5e5e5";
					lists[this.index].style.display="block";
					img0.style.height="8px";
					img0.style.marginTop="18px";
					img0.src="img/bj.png";
				}else{
					this.style.borderBottom="none";
					lists[this.index].style.display="none";
					img0.style.height="14px";
					img0.style.marginTop="16px";
					img0.src="img/rj.png";
				}
				var xmlhttp;
				if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
					xmlhttp=new XMLHttpRequest();
				}else{// code for IE6, IE5
					xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
				}
				xmlhttp.onreadystatechange=function(){
					if (xmlhttp.readyState==4 && xmlhttp.status==200){
				    	document.getElementById("right").innerHTML=xmlhttp.responseText;
				    	var myDivScript = document.getElementById("right").getElementsByTagName("script")[0]; 
						var newScript = document.createElement("script"); 
						newScript.src="js/toolbar.js"; 
						document.body.appendChild(newScript); 
				    }
				}
				xmlhttp.open("GET","toolbar.html",true);
				xmlhttp.send();
				document.getElementById("right").style.borderRadius="0";
				var li1=lists[this.index].getElementsByTagName("li");
				for(var t=0;t<li1.length;t++){
					(function(t){
						li1[t].onclick=function(){
							var xmlhttps;
							if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
								xmlhttps=new XMLHttpRequest();
							}else{// code for IE6, IE5
								xmlhttps=new ActiveXObject("Microsoft.XMLHTTP");
							}
							xmlhttps.onreadystatechange=function(){
								if (xmlhttps.readyState==4 && xmlhttps.status==200){
								    var obj=JSON.parse(xmlhttps.responseText);
								    
								    var html="";
								    var htms=new Array;
								    var alists=obj[t].alist;
									for(var key in obj[t].alist[0]){
									    html+="<th>"+key+"</th>";
										htms.push(key);
									}
									var tab=document.getElementById("tab");
									var td="";
									var nr="";
									var len=htms.length;
									for(var e=0;e<alists.length;e++){
										for(var s=0;s<htms.length;s++){
											if(s==1){
												td+="<td><a href=\"javascript:;\">"+alists[e][htms[s]]+"</a></td>";
											}else{
												td+="<td>"+alists[e][htms[s]]+"</td>";
											}		
										}
										nr+="<tr><td><input type=\"checkbox\" class=\"inp\"  /></td>"+td+"</tr>";
										td="";
									}
									
									tab.innerHTML="<caption class=\"h3\">"+obj[t].title+"</caption><tr class=\"tr\"><th></th>"+html+"</tr>"+nr;
							    }
							}
							xmlhttps.open("GET","json/13.json",true);
							xmlhttps.send();
						}
					})(t);
				}
			}
			
		}
		
		
		var xmlhttp;
		if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		}else{// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function(){
			if (xmlhttp.readyState==4 && xmlhttp.status==200){
		    var obj=JSON.parse(xmlhttp.responseText);
		    var xx=document.getElementById("xx");
			    for(var r=0;r<obj.length;r++){
			    	xx.innerHTML+="<li><img src=\"img/gj.png\"/>"+obj[r].title+"</li>"
			    	
			    }
		    }
		}
		xmlhttp.open("GET","json/13.json",true);
		xmlhttp.send();
	}one();
	
	
	
	
	
	
});

