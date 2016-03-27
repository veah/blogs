/**
 * vertiry.js
 */
window.vertify = window.$ = function(configMap){
    var ret={};
    var inputWarpper = configMap.inputWarpper;
    var messageWarpper = configMap.messageWarpper;
    var text = configMap.text;
    var testFunc = configMap.vertifyFunc;
    var vertify = function(){
        messageWarpper.messageBox.innerHTML = '';
        vertifyWarp(inputWarpper.inputBox.value);
    }
    ret.vertify = vertify;
    inputWarpper.inputBox.addEventListener('focus',function(){
        messageWarpper.messageBox.innerHTML = text;
        clearStyle();
    });
    inputWarpper.inputBox.addEventListener('blur',vertify);
    function clearStyle(){
        messageWarpper.messageBox.classList.remove(messageWarpper.successClass,messageWarpper.errorClass);
        inputWarpper.inputBox.classList.remove(inputWarpper.errorClass,inputWarpper.successClass);
    }
    function vertifyWarp(text){
        var returnObj = testFunc(text);
        clearStyle();
        if(returnObj.res === true){
            messageWarpper.messageBox.innerHTML = returnObj.text+"";
            messageWarpper.messageBox.classList.add(messageWarpper.successClass);
            inputWarpper.inputBox.classList.add(inputWarpper.successClass);
        }else{
            messageWarpper.messageBox.innerHTML = returnObj.text+"";
            messageWarpper.messageBox.classList.add(messageWarpper.errorClass);
            inputWarpper.inputBox.classList.add(inputWarpper.errorClass);
        }
    }
    return ret;
}