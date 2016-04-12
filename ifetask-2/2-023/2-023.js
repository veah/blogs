var queue = [];
var tempNode = null;
var current,timer;
var v = "";
var found = false;
var rootNode = document.getElementById("rootNode");
var search = document.getElementById("search");
var btn  = document.getElementById("btn");

//广度优先
function BFS(node){
	if(node.firstElementChild){		//首先判断第一子节点是否存在，不存在就啥也不搞
		var temp = [];
		temp.push(node);
	}
	while(temp.length>0){
		var tempNode = temp.shift()
		queue.push(tempNode);
		if(tempNode.firstElementChild){
			tempNode = tempNode.firstElementChild;
			temp.push(tempNode);
			while(tempNode.nextElementSibling){
				tempNode = tempNode.nextElementSibling;
				temp.push(tempNode);
			}
		}
		
	}

}

//深度优先-先序遍历
function preOrder(node){
	if(node){
		queue.push(node);
		preOrder(node.firstElementChild);
		if(node.firstElementChild){
			tempNode = node.firstElementChild.nextElementSibling;
			 while(tempNode){
			 	p = tempNode;
			 	preOrder(tempNode);
			 	tempNode = p.nextElementSibling;
			}
		}
	}
}

function showOut(){
	current = queue.shift(); //FIFO
	if(current){
		current.style.backgroundColor = '#00B2EE';
		timer = setTimeout(function(){
			current.style.backgroundColor = '#fff';
			showOut();
		},800);
	}
}

function showResult(){
	if (queue.length === 0 && !found) {
	    alert("Not Found");
	}
	current = queue.shift(); //出队
	if (current) {
	    v = current.firstChild.nodeValue;
	    if (v.trim() === search.value) {
	        current.style.backgroundColor = "deeppink";
	        found = true;
	        alert("The text is in pink");
	        return;
	    } else {
	        current.style.backgroundColor = "#6fa3ff";
	        timer = setTimeout(function () {
	            current.style.backgroundColor = "#fff";
	            showResult(); 
	        }, 800);
	    }
	}
}

function show(){
	if(search.value !== "") {
	   showResult();
	} else {
	   showOut();
	}
}

btn.onclick = function (x){
				if (queue.length>0){
					current.style.backgroundColor = '#fff';
					queue = [];
					tempNode= null;
					found = false;
					clearTimeout(timer);
				}
				//判断点击按钮类型
				switch (x.target.id) {  
					case "pre" : 
						preOrder(rootNode);						
						break;
					case "BFS" : 					
						BFS(rootNode);
						break;
					default:
						break;
				}

				show();
			};