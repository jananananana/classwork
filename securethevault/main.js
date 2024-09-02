(function (){
    // Vault combo 10 - 40 - 39
    // 1. Set up self-executing function
    // 2. Create private functions which cannot be accessed outside of this file 
    // 3. Set up three variables to hold codes
    // 4. Call the variables within function to return a valuable message
    // 5. Create an event listener on the button
    // 6. Create a dialog with the values 
    // 7. Attach the dialog to the event listener
    // 8. Attach event listener to close dialog close button
    
    const appFunctions = (function() {
        const _returnVaultCode = () => {
            return console.log("hi");
        }

        const _init = () => {
            _returnVaultCode();
        }    
        
        return {
            init: function() {_init()}
        };
    }());

    (function (){
        appFunctions.init();
    }())

})();