define(['views/masterView','loadHTML/loadCommentPoast'],function(master,loadComment){
//$(document).ready(function(){
    var load = new master();
    var loadPosting = new loadComment;
       console.log('load',loadPosting);

       //new postView();
       console.log('postView',loadPosting);
       console.log($('.submitPost button').length);
//});


});


