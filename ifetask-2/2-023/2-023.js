var queue = [];
var tempNode = null;
var current,timer;
var root = document.getElementById("root");
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
		},750);
	}
}

function showResult(){
	if (queue.length === 0 && !found) {
	    alert("没有找到");
	}
	head = queue.shift(); //出队
	if (head) {
	    text = head.firstChild.nodeValue;
	    if (trim(text) === search.value) {
	        head.style.backgroundColor = "deeppink";
	        found = true;
	        endTime = new Date();
	        alert("Bingo！本次查询时间：" + (endTime - startTime) / 1000 + "s");
	        return;
	    } else {
	        head.style.backgroundColor = "#6fa3ff";//显示蓝色
	        timer = setTimeout(function () {
	            head.style.backgroundColor = "#fff";//1秒后节点的蓝色变为白色
	            searchShow(); //递归调用，使要显示的节点不停出队显示，直至为空
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
					current.style.backgroundColor = '#fff'
					queue = [];
					tempNode= null;
					clearTimeout(timer);
				}
				//判断点击按钮类型
				switch (x.target.id) {  
					case "pre" : 
						preOrder(root);						
						break;
					case "BFS" : 					
						BFS(root);
						break;
				}

				show();
			};