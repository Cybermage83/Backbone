/**
 * Created by JetBrains PhpStorm.
 * User: andrey
 * Date: 4/9/12
 * Time: 1:19 PM
 * To change this template use File | Settings | File Templates.
 */
define(['underscore',
    'backbone',
    'libs/backbone/bb_localstorage',
    'modules/comment'],
    function(_,Backbone,Store,Comment){
    var CommentList = Backbone.Collection.extend({
        model: Comment,

        setNewPost: function(val){
            this.set({message:val})
        },

        LS: new Store('comments')

    });
    console.log('List', new CommentList);
    return new CommentList;
});
