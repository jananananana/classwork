(function (){
    const appFunctions = (function() {
        
        const _categorizeGroceries = (data) => {
            let sectionArr = [];


            for (let i = 0; i < data.length; i++) {
                const element = data[i];

                if (!sectionArr.includes(element.area)) {
                    sectionArr.push(element.area);
                }

                console.log(sectionArr);


                console.log(element);
                console.log(_checkForSection(data[i]), sectionArr);
                
            }

            return console.log(data);
        }

        const _checkForSection = (groceryitem, sectionArr) => {

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