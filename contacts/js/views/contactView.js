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
                events:{
                    'click .contact-container':'myclick'
                },
                myclick : function(e){
                    console.log('CLICK',e);
                },
                render: function(){
                    //console.log('this?',this);
                    this.$el.html(this.template(this.model.toJSON()));
                   // console.log('this>>',this);
                    return this;
                }
            });
        console.log('ContactView',ContactView.prototype,'other');
        return ContactView;
    });
