/**
 * Created by JetBrains PhpStorm.
 * User: andrey
 * Date: 4/16/12
 * Time: 4:38 PM
 * To change this template use File | Settings | File Templates.
 */
define(['text!template/generalComment.html'],function(postTemp){console.log('postView1');

    var BV = Backbone.View,
        postView = BV.extend({

            tagName:'li',
            events:{
                'click .action a:last-child ': 'deleteme'
            },
            template:_.template(postTemp),
            initialize:function(){
                console.log('this',this);

                this.render();
                console.log('this model!!',this.model[0]);
                var len = this.model.length, post = this.model[len-1];
                console.log('this is a model?', this.model[len-1],post.attributes);
                this.$el.prepend(this.template(post.attributes));
            },
            render:function(){
                console.log('this model',this.model);
                //this.$el.prepend(_.template(this.model.attributes.toJSON()));
                return this;
            },
            deleteme: function(e){
                console.log('What is model',this,this.model);
                var comment = $(e.target).parentsUntil('li').parent();
                console.log('etarget', e.target,'PARENT',comment);
                console.log('ID',comment.attr('id'));

                comment.remove();
                console.log('clicked!');
            }
        });
    return postView;

});