/**
 * Created by JetBrains PhpStorm.
 * User: andrey
 * Date: 4/10/12
 * Time: 10:00 AM
 * To change this template use File | Settings | File Templates.
 */
define(['underscore','backbone'],function(_,Backbone){

   var Comment = Backbone.Model.extend({
        defaults:{
            message: 'Please post your response here',
            completed: false
        },

        initialize : function(){
            if (!this.get("message")) {
                this.set({"message": this.defaults.message});
            }
        },

        save:function(){
            this.save({completed:!this.get('completed')});
        },

        clear: function(){
            this.destroy();
            this.view.remove();
        }
   });
   console.log('Comment',Comment.prototype);
   return Comment;
});