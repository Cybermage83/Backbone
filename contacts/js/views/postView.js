/**
 * Created by JetBrains PhpStorm.
 * User: andrey
 * Date: 4/16/12
 * Time: 4:38 PM
 * To change this template use File | Settings | File Templates.
 */
define(['Collection/Users'],function(User){console.log('postView11');
    var BV = Backbone.View,
        postView = BV.extend({
            el: $(".submitPost"),
            events:{
                'focus input': 'gatherPost',
                'focus textarea': 'gatherPost',
                'click button': 'gatherPost'
            },
            initialize:function(){
              this.render();
            },
            render:function(){
                this.$el = $('.submitPost');
                console.log('WHAT EL',this.el,this.$el);
              return this;
            },

            gatherPost:function(e){
                console.log('Submit Clicked',e.target);
                var username = this.$el.find('inputt').val();
                new User({userName:username});
            }
        });
    return postView;

});