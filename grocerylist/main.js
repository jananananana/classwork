(function (){
    const appFunctions = (function() {
        
        const _getGroceryData = () => {
            return console.log("hi jana");
        }

        const _init = () => {
            _getGroceryData();
        }

        return {
            init: function() {_init()}
        };
    }());

    (function (){
        appFunctions.init();
    }())

})();