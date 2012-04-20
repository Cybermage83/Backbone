define(['text!template/postcomment.html','Collection/Users'],function(teml,collectionUsers){

    var BV = Backbone.View,
        loadCommnetPoast = BV.extend({
            el:$('#postreply'),
            template: _.template(teml),
            initialize:function(){console.log('this is initialized',this);

                this.render();
            },

            events:{
                'focus input': 'clearUsername',
                'focusout input': 'getUsername',
                'click button': 'gatherPost'
            },

            render:function(){
                this.$el.html(teml);

                    console.log('this is render okie',this,this.el);
                return this;
            },

            clearUsername:function(e){
                var elm = $(e.target);
                elm.val('');
                console.log('Submit Clicked',e.target,$(e.target).val());
            },

            getUsername: function(e){
                var elm = $(e.target);

                console.log('Submit Clicked1',e.target,elm.val());
                var username = elm.val();
                var userslist = new collectionUsers({userName:username});
                userslist.models[0].isValid();
                // /console.log('valide',userslist.models[0].isValid());
                //console.log('name valid',userslist.models[0].validate());
                console.log('this.Users',userslist);

            },

            gatherPost:function(){

            }
        });
    console.log('loaded LoadComment Poast',loadCommnetPoast.prototype);
    return loadCommnetPoast;
});