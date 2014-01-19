var Director = require('director');

var routerInstance;

module.exports = function(routes) {
    if(routerInstance === undefined) {
        routerInstance = Director.Router(routes);
    }
    return routerInstance;
}