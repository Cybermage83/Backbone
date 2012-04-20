define(function(){
    var BM = Backbone.Model,
        User = BM.extend({
            defaults:{
                userId: 0,
                userName:'default',
                avatar: 'img/registered.jpeg',
                post:'Please Enter your comment here..',
                replyList:{
                    usename:'default',
                    avatar:'img/placeholder1.jpg',
                    reply:'Response here',
                    userId:0
                }
            },
            validate:function(attr){
                var cleanUser = /\w/gi;
                console.log('does validate run',attr);
                if(attr.userName.search(cleanUser) > -1 ){

                    console.log('ERroro', attr.userName);
                    return 'FRAKING ERRO';
                }
            },
            err:function(str){
                console.log(str + error)
            }
        });
    console.log('USer',User.prototype);
    return User;
});