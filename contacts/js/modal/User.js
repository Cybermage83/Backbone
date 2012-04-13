define(function(){
    var BM = Backbone.Model,
        User = BM.extend({
            defaults:{
                userId: 0,
                userName:'default',
                avatar: 'img/placeholder1.png',
                post:'Please Enter your comment here..'
            }
        });
    console.log('USer',User.prototype);
    return User;
});