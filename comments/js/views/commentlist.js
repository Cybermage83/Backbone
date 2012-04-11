define(['jquery',
        'underscore',
        'backbone',
        'text!template/contacts.html'
        ],
    function($, _, Backbone,commentTemp){
        var CommentList = Backbone.View.extend({
            tagName: 'li',

            templ: _.template(commentTemp),

            initialize: function() {
              _.bindAll(this, 'render');
              this.model.bind('change', this.render);
              this.model.view = this;
            },

            render: function(){
                $(this.el).html(this.template(this.model.toJSON()));
                this.setContent();
                return this;
            },
            setContent:function(){
                var content = this.model.get('message');
                this.$('.post').text(content);
            }
        });
        console.log('CommentList',CommentList.prototype);
        return CommentList;
    }
);

