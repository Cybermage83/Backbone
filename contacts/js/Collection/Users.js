define(['modal/User'],function(User){
     var BC = Backbone.Collection,
         Users  = BC.extend({
            model:User
         });
        console.log('this USers',Users.prototype);
    return Users;
});