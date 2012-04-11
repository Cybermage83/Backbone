// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: config.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-optamd3-min',
    text: 'libs/require/text'
  }

});

require(['views/app','jquery','underscore','backbone'], function(AppView,$,_,Backbone){

    console.log('appView',AppView.prototype,'$',$,'_',_,'backbone',Backbone);
    var app_view = new AppView;
});
