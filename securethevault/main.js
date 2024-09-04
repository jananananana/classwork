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
        
        // seperate the business logic from the UI
        const _returnVaultCode = () => {
        
            // wait for the dom to finish loading because I chose to not move this file to the bottom
            document.addEventListener('DOMContentLoaded', (event) => {
                _setVaultCombo();

                const theVaultButton = document.getElementById('secureTheVault');

                // If the button isn't there don't error out
                theVaultButton?.addEventListener('click' , _toggleDialogWithCode);
                // No need for this to bubble up, nothing else needs to use this click
                event.stopPropagation();
            });
        }

        // dialog opening and closing logic
        const _toggleDialogWithCode = () => {
            const dialog = document.getElementById('vaultDialog');

            if(dialog.open) {
                dialog.close();
            } else {
                dialog.showModal();
            }
        }

        // this is where the magic happens and the code is set - "business logic"
        const _setVaultCombo = () => {
            const firstnum = 2*10,
                  secondnum = Math.ceil(39.8),
                  thirdnum = 40 - 1
                  fullcode = `The code is  ${firstnum} - ${secondnum} - ${thirdnum}!`;
            
            document.getElementById('theCode').append(fullcode);

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