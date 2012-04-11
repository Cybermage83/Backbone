/**
 * Created by JetBrains PhpStorm.
 * User: andrey
 * Date: 4/9/12
 * Time: 12:17 PM
 * To change this template use File | Settings | File Templates.
 */
define([
        'jquery',
        'underscore',
        'backbone',
        'collection/lists',
        'views/commentlist',
        'text!template/stats.html'
       ],function($, _, Backbone,modelList,viewComments,tempStat){

        var AppView = Backbone.View.extend({
            el:$('#social'),

            events: {
                  "keypress #commentIt > textarea":  "createOnEnter",
                  'click #submit':'createOnEnter'
              //    "keyup #new-todo":     "showTooltip",
                //  "click .todo-clear a": "clearCompleted"
            },

            initialize:function(){
                _.bindAll(this, 'addOne', 'addAll', 'render');

                this.textarea    = this.$("#commentIt > textarea");

                modelList.bind('add',     this.addOne);
                modelList.bind('reset',   this.addAll);
                modelList.bind('all',     this.render);

                modelList.fetch();

            },

            render: function(){

            },

            addOne: function(todo) {
              var view = new viewComments({model: todo});
              this.$("#list").append(view.render().el);
            },

            // Add all items in the **Todos** collection at once.
            addAll: function() {
                modelList.each(this.addOne);
            },

            // Generate the attributes for a new Todo item.
            newAttributes: function() {
              return {
                message: this.textarea.val()

              };
            },

            createOnEnter: function(e) {console.log('called');
                  if (e.keyCode != 13) return;
                  modelList.create(this.newAttributes());

            }




        });
        console.log('CommentSubmit',AppView);
        return AppView;
    }
);