"use strict";
var Site = (function () {
    function Site(id, name) {
        this.id = id;
        this.name = name;
    }
    return Site;
}());
exports.Site = Site;
var Form = (function () {
    function Form(id, name, url, alexa) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.alexa = alexa;
    }
    return Form;
}());
exports.Form = Form;
//# sourceMappingURL=sites.js.map