(function (){
    const appFunctions = (function() {
        
        const _categorizeGroceries = (data) => {
            let sectionArr = [];

            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                
            }

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