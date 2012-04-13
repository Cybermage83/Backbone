define(['text!template/postcomment.html','Collection/Users'],function(teml,collectionUsers){

    var BV = Backbone.View,
        loadCommnetPoast = BV.extend({
            el:$('#postreply'),
            template: _.template(teml),
            initialize:function(){console.log('this is initialized',this);

                this.render();
            },
            render:function(){
                this.$el.html(teml);
                    console.log('this is render okie',this);
                return this;
            }
        });
    console.log('loaded LoadComment Poast',loadCommnetPoast.prototype);
    return loadCommnetPoast;
});