/**
 * Created by JetBrains PhpStorm.
 * User: andrey
 * Date: 4/9/12
 * Time: 11:28 AM
 * To change this template use File | Settings | File Templates.
 */

require.config({
  paths: {
    jquery: 'libs/jquery/jquery',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-optamd3-min',
    text: 'libs/require/text'
  }

});



require(['views/commentsubmit','jquery','underscore','backbone'], function(AppView,$,_,Backbone){
    var appView = new AppView;
    console.log('appView',appView);
});
