
			var current,timer,
			queue = [],
			root = document.getElementsByClassName("one")[0], //取得根节点
			btn  = document.getElementById("btn");

			function preOrder(node){
				if(node){
					queue.push(node);
					arguments.callee(node.firstElementChild);
					arguments.callee(node.lastElementChild);
				}
			}
			function inOrder(node){
				if(node){				
					arguments.callee(node.firstElementChild);
					queue.push(node);
					arguments.callee(node.lastElementChild);
				}
			}
			function postOrder(node){
				if(node){
					arguments.callee(node.firstElementChild);
					arguments.callee(node.lastElementChild);
					queue.push(node);
				}
			}

			function showOut(){
				current = queue.shift();
				if(current){
					current.style.backgroundColor = '#00B2EE';
					timer = setTimeout(function(){
						current.style.backgroundColor = '#fff';
						showOut();
					},1000);
				}
			}

			btn.onclick = function (x){
				if (queue.length>0){
					current.style.backgroundColor = '#fff'
					queue = [];
					clearTimeout(timer);
				}
				//判断点击按钮类型
				switch (x.target.id) {  
					case "pre" : 
						preOrder(root);						
						break;
					case "in" : 					
						inOrder(root);
						break;
					case "post" : 					
						postOrder(root);			
						break;
					}

				showOut();
			};
