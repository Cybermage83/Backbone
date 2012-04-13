define(['views/masterView','loadHTML/loadCommentPoast'],function(master,loadCommentPostHTML){
$(document).ready(function(){
    var load = new master();
       new loadCommentPostHTML;
       console.log('load',load);
});


});


