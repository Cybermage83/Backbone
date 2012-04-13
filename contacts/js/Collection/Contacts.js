define(['modal/Contact'],function(Contact){
    var BC = Backbone.Collection,
        CollectionList = BC.extend({
            model:Contact
        });
    console.log('Contacts',CollectionList.prototype);
    return CollectionList;
});
