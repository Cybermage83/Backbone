define(['text!template/postcomment.html','Collection/Users','views/postView'],function(teml,collectionUsers,PostIt){

    var BV = Backbone.View,
        loadCommnetPoast = BV.extend({
            el:$('#postreply'),
            template: _.template(teml),
            initialize:function(){console.log('this is initialized',this);

                this.render();
                this.users = new collectionUsers();
            },
            data:{
                userName:'',
                post:'',
                userId:0
            },

            events:{
                'focus input': 'clearUsername',
                'focus textarea': 'clearUsername',
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
                this.data.userName = elm.val();

                console.log('Submit Clicked1',e.target,elm.val());

                //var userslist = new collectionUsers({userName:username});
                //userslist.models[0].isValid();

                // /console.log('valide',userslist.models[0].isValid());
                //console.log('name valid',userslist.models[0].validate());
                //console.log('this.Users',userslist);

            },

            gatherPost:function(e){
                var elm = $(e.target);

                this.data.post = this.$el.find('textarea').val();

                this.users.add(this.data);
                var len = this.users.length;
                console.log('len',len);
                var model = this.users.at(len-1);
                model.attributes.userId = model.cid;
                console.log('len model', model);
                console.log('this data is >>',this.users);
                var comment = new PostIt({el:$('.posts'),model:this.users.models});
                console.log('comment',comment);
            }
        });
    console.log('loaded LoadComment Poast',loadCommnetPoast.prototype);
    return loadCommnetPoast;
});