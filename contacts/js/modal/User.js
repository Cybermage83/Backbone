define(function(){
    var BM = Backbone.Model,
        User = BM.extend({
            defaults:{
                avatar: 'img/registered.jpeg',
                userId: 0,
                userName:'default',
                post:'Please Enter your comment here..',
                replyList:{
                    usename:'default',
                    avatar:'img/placeholder1.jpg',
                    reply:'Response here',
                    userId:0
                }
            },
            validate:function(attr){
                var cleanUser = /\W/gi;
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