(function (){
    const appFunctions = (function() {
        
        const _categorizeGroceries = (data) => {
            return console.log(data);
        }
        
        const _getGroceryData  = async () => {
            const data = await fetch ('./Groceries.json').then((data) => data.json());
            _categorizeGroceries(data);
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