declare var requirejs;
declare var define;

requirejs.config({
    urlArgs: "bust=" + (new Date()).getTime(), // TODO: Use static "version=" for deployments
    paths: {
        'text': '../Scripts/text',
        'durandal': '../Scripts/durandal',
        'plugins': '../Scripts/durandal/plugins',
        'transitions': '../Scripts/durandal/transitions'
    }
});

define('jquery', () => jQuery);
define('knockout', () => ko);

requirejs(['App/main.js'], (main) => {


});