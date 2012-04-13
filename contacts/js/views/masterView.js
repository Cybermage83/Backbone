/**
 * Created by JetBrains PhpStorm.
 * User: andrey
 * Date: 4/11/12
 * Time: 12:38 PM
 * To change this template use File | Settings | File Templates.
 */
define(['Collection/Contacts','views/contactView'],function(CollectionList,contactView){
   var BV = Backbone.View,
       masterView = BV.extend({
           el:$('#contacts'),
           initialize: function(){
               this.collection = new CollectionList(contacts);
               console.log('this.collection',this.collection);
               this.render();
               console.log('this.render',this.render);
           },
           render: function(){
               var MV = this;
               _.each(this.collection.models,function(item){
                   MV.renderContact(item);
               },this);
           },
           renderContact:function(item){
               var ctcView = new contactView({model:item});
              // console.log('ctcView',ctcView,ctcView.$el);
               this.$el.append(ctcView.render().el);
             //  console.log('ctcView1',ctcView.$el,ctcView.el);
           }
       });
       console.log('masterView',masterView.prototype,'contactView',contactView.prototype);

       return masterView;

});


