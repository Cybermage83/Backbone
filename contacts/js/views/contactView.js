/**
 * Created by JetBrains PhpStorm.
 * User: andrey
 * Date: 4/11/12
 * Time: 12:08 PM
 * To change this template use File | Settings | File Templates.
 */
    define(['text!template/contacts.html'],function(temp){
        var BV = Backbone.View,
            ContactView = BV.extend({
                tagName:'article',
                className:'contact-container',
                template: _.template(temp),
                render: function(){
                    this.$el.html(this.template(this.model.toJSON()));
                    return this;
                }
            });
        console.log('ContactView',ContactView.prototype,ContactView.$el);
        return ContactView;
    });
