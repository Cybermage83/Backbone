/**
 * Created by JetBrains PhpStorm.
 * User: andrey
 * Date: 4/11/12
 * Time: 11:25 AM
 * To change this template use File | Settings | File Templates.
 */
define(function(){
    var BM = Backbone.Model,
        Contact = BM.extend({
            defaults:{
                photo: 'img/placeholder.png'
            }
        });
    console.log('Contact',Contact.prototype);
    return Contact;
});






