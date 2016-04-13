var queue = [];
var current = timer = null;
var v = "";
var found = false;
var rootNode = document.getElementById("rootNode");
var search = document.getElementById("search");
var btn  = document.getElementById("btn");

//广度优先
function BFS(node){
	if(node.firstElementChild){		//首先判断第一子节点是否存在，不存在就啥也不搞
		var temp = [];				//创建一个临时数组存放待查节点
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
		arguments.callee(node.firstElementChild);
		if(node.firstElementChild){
			tempNode = node.firstElementChild.nextElementSibling;
			 while(tempNode){
			 	p = tempNode;
			 	arguments.callee(tempNode);
			 	tempNode = p.nextElementSibling;
			}
		}
	}
}

// function showOut(){
// 	current = queue.shift(); //FIFO
// 	if(current){
// 		current.style.backgroundColor = '#00B2EE';
// 		timer = setTimeout(function(){
// 			current.style.backgroundColor = '#fff';
// 			showOut();
// 		},800);
// 	}
// }

//优化版
function showOut(){
	timer = setInterval(function(){
		if(current){
			current.style.backgroundColor = '#fff';
		}
		if(queue.length===0){
			clearInterval(timer);
		}else{
			current = queue.shift();
			current.style.backgroundColor = '#00B2EE';
		}
	},800)
}

function showResult(){
	if (queue.length === 0 && !found) {
	    alert("Not Found");
	}
	current = queue.shift(); 
	if (current) {
		//防止空白节点报错
	    v = current.firstChild?current.firstChild.nodeValue:"";

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
	        }, 500);
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

//自动清空输入框
search.addEventListener("focus",function() {
    this.value = "";
});