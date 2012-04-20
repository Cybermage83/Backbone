define(['views/masterView','loadHTML/loadCommentPoast'],function(master,loadCommentPostHTML,postView){
//$(document).ready(function(){
    var load = new master();
       new loadCommentPostHTML;
       console.log('load',load);

       //new postView();
       console.log('postView',postView);
       console.log($('.submitPost button').length);
//});


});


