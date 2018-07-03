var articleId;
$(document).ready(function(){
    
    var articleId = getUrlParam('articleId');
    $.ajax({
            type : "GET",
            url : "http://localhost:8081/article/find/" + articleId,
            dataType : "jsonp",
            jsonp: "callback",
            success: function(json) {
                console.log(json.obj);
                var data = json.obj;
                $(".tuijian .hometitle").text(data.articleTitle);
                $(".tuijian p").text(data.articleContent);
            }
    });
   
});


function getUrlParam(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) return unescape(r[2]); return null;
}



