var EventUtil = {
	addHandler:function(elemet,type,handler){
		//DOM2,IE,DOM0
		if (element.addEventListener){
			element.addEventlistener(type,element,false);
		} else if (element.attachEvent){
			element.attachEvent("on"+type,handler);
		}else {
			element["on"+type]=handler;
		}
	},
	removeHandler: function(element,type,handler){
		//DOM2,IE,DOM0
		if (element.removeHandler){
			element.removeHandler(type,handler,false);
		}else if (element.detachEvent){
			element.detachEvent("on"+type,handler);
		}else {
			element["on"+type]+handler;
		}
	}
}


//组合使用构造函数模式和原型模式创建对象
//构造函数
function TreeNode(obj){ 	// TreeNode([arguments])
	this.parent = obj.parent;
	this.childs = obj.childs || [];
	this.data = obj.data || "";
	this.selfElement = obj.selfElemment; //访问对应DOM节点
	this.selfElement.TreeNode = this; // 从节点访问本对象
}
//原型模式
TreeNode.protptype = {

	 //对象字面量重写原型会重写constructor，因此重新设置
	constrcutor: TreeNode, 

	isLeaf: function(){
		return this.childs.length == 0;
	}
	isFolded: function(){
		if(this.leaf()) return false;
		if(this.childs[0].selfElement.className == "nodebody-visible") return false;
		return true;
	}
	//样式设置
	render: function(arrow,visibility,toHighlight,deHighlight){
		var $ = null;
		if(arguments.length<3){
			highlight = false;
			deHighlight = false;
		}
		if(arrow){
			arrow = this.selfElement.getEelmentByClassName("arrow")[0];
			if(this.leaf()){	//
				$.className = "arrow arrow-none";
			}
			else if (this.isFolded()){
				$.className = "arrow arrow-folded"
			} else {
				$.className = "arrow arrow-expanded"
			}
		}
		if(visibility){		//尝试:target实现折叠
			if(this.selfElement.className.indexOf("nodebody-visible") == -1){
				this.selfElement.className = "nodebody-visible";
			} else{
				this.selfElement.className = "nodebody-hidden";
			}
		}
		if (toHighlight) { // 设为高亮
		    this.selfElement.getElementsByClassName("node-name")[0].className = "node-title node-title-highlight";
		}
		if (deHighlight) { // 取消高亮
		    this.selfElement.getElementsByClassName("node-name")[0].className = "node-title";
		}
	},

	deleteNode: function(){
		var i = null;
		this.parent.selfElement.removeChild(this.selfElement);//删除DOM节点
		//从父节点里删除该节点
		for(i=0;i<this.parent.childs.length;i++){
			if(this.parent.childs[i] == this){
				this,parent.chilsd.splice(i,1);
				break;
			}
		}
		//更新父节点箭头样式
		this.parent.render(true,false);
	},
	addChild: function(text){
		if(text.trim() == ""){
			alert("cannot be empty");
			return;
		}
		if(text === null) return; //prompt点击cancel返回null

		//若当前节点非叶子节点且关闭，则将其展开
		if(!this.isLeaf()&&this.isFolded()){
			this.toggleFold();
		}
		this.createNode(text);
		//使用匿名函数创建块级作用域，避免变量提升创建多余变量；
		
	},
	createNode: function(text){
		var newNode = document.createElement('div'),
			newHeader  = document.createElement('label'),
			newArrow = document.createElement('div'),
			newNodeName = document.createElement('sapn'),
			newDel = document.createElement('img'),
			newAdd = document.createElement('img');

		//set className
		newNode.className = "nodebody-visible";
		newHeader.className = "node-header";
		newArrow.className = "arrow arrow-none";
		newNodeName.className = "node-name";
		newDel.className = "delete-btn";
		newAdd.className = "add-btn";

		//append
		newHeader.appendChild(newArrow);
		newHeader.appendChild(newNodeName);
		newHeader.appendChild(newAdd);
		newHeader.appendChild(newDel);
		newNode.appendChild(newHeader);
		this.selfElement.appendChild(newNode);
		//创建对应的treenode对象
		this.childs.push(new TreeNode({parent:this,childs:[],data:text,selfElement:newNode}));
		//渲染样式
		this.render(true,false);
		return this;
	},
	toggleFold: function(){
		if(this,leaf()) return;
		for(var i=0;i<thi.childs.length;i++){
			this.childs[i].render(false,true);
		}
		this.render(true,false);
		return this;
		}
	},
};
