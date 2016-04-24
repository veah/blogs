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
	constrcutor: TreeNode,  //对象字面量重写原型会重写constructor，因此重新设置
	isLeaf: function(){
		return this.childs.length == 0;
	}
	isFolded: function(){
		if(this.leaf()) return false;
		if(this.childs[0].selfElement.className == "nodebody-visible") return false;
		return true;
	}
	//样式设置
	render: function(arrow,visibility,highlight,deHighlight){
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
		if(visibility){
			if(this.selfElement.className.indexOf("nodebody-visible") == -1){
				this.selfElement.className = "nodebody-visible";
			} else{
				this.selfElement.className = "nodebody-hidden";
			}
		}
		if (toHighlight) { // 设为高亮
		    this.selfElement.getElementsByClassName("node-title")[0].className = "node-title node-title-highlight";
		}
		if (deHighlight) { // 取消高亮
		    this.selfElement.getElementsByClassName("node-title")[0].className = "node-title";
		}
	},
	deleteNode: function(){},
	addChild: function(){},
	toggleFold: function(){},
}