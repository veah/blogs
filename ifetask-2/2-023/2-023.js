var queue = [];
var ttt = null;
var root = document.getElementById("root");
var btn  = document.getElementById("btn");

//广度优先
function BFS(node){
	if(node.firstElementChild){		//首先判断第一子节点是否存在，不存在就啥也不搞
		var temp = [];
		temp.push(node);
	}
	while(temp.length>0){
		var ttt = temp.shift()
		queue.push(ttt);
		if(ttt.firstElementChild){
			ttt = ttt.firstElementChild;
			temp.push(ttt);
		}
		while(ttt.nextElementSibling){
			ttt = ttt.nextElementSibling;
			temp.push(ttt);
		}
	}

}

//深度优先-先序遍历
function preOrder(node){
	if(node){
		queue.push(node);
		preOrder(node.firstElementChild);
		if(node.firstElementChild){
			ttt = node.firstElementChild.nextElementSibling;
			 while(ttt){
			 	p = ttt;
			 	preOrder(ttt);
			 	ttt = p.nextElementSibling;
			}
		}
	}
}

btn.onclick = function (x){
				if (queue.length>0){
					current.style.backgroundColor = '#fff'
					queue = [];
					ttt= null;
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
					case "post" : 					
						postOrder(root);			
						break;
					}

				// showOut();
			};