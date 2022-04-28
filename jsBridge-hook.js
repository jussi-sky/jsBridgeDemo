// Jussi
// jsBridge hook

Java.perform(function() {

	console.log("====== Jussi ======")

	var BridgeWebView = Java.use("com.github.lzyzsd.jsbridge.BridgeWebView")

    BridgeWebView.registerHandler.implementation = function(handlerName, BridgeHandler){
        console.warn("Hook BridgeWebView.registerHandler")
        console.log(handlerName)
        this.registerHandler(handlerName, BridgeHandler)
    };

	// BridgeWebView.handlerReturnData.implementation = function(url){
	//     console.warn("Hook BridgeWebView.handlerReturnData")
	//     console.log(url)
	//     this.handlerReturnData(url)
 //    };

 //    var BridgeUtil = Java.use("com.github.lzyzsd.jsbridge.BridgeUtil")
 //    BridgeUtil.getDataFromReturnUrl.implementation = function(url){
 //        console.warn("Hook BridgeUtil.getDataFromReturnUrl")
 //        var data = this.getDataFromReturnUrl(url)
 //        console.log(data)
 //        return data
 //    };

    var Message = Java.use("com.github.lzyzsd.jsbridge.Message")
    Message.setResponseData.implementation = function(respData){
        console.warn("======= Hook Message.setResponseData =======")
        console.log(respData)
        respData = "Hook"
        this.setResponseData(respData)
    };

    Message.getData.implementation = function(){
    	console.warn("======= Hook Message.getData =======")
    	var data = this.getData()
    	console.log(data)
    	// data = "Hook"
    	return data
    }


});