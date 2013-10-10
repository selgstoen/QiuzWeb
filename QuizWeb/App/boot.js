requirejs.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        'text': '../Scripts/text',
        'durandal': '../Scripts/durandal',
        'plugins': '../Scripts/durandal/plugins',
        'transitions': '../Scripts/durandal/transitions'
    }
});

define('jquery', function () {
    return jQuery;
});
define('knockout', function () {
    return ko;
});

requirejs(['App/main.js'], function (main) {
});
//# sourceMappingURL=boot.js.map
