# WiseWalletKitchen

// To Do

// Set the Fork to be the new remote URL to local project
// + establish the current remote URL in terminal
// // - git remote -v
// + UPdate the remote URL to point to fork
// // - git remote set-url origin <new-fork-url>
// + check its correct by running (should be new fork address)
// // - git remote -v

// Try to work out solution to JWT issue in Login function
// + must set the state of loginAccess 
// + boolean statement depends on valid Json Web Token
// + valid JWT from SupaBase backend


// Try to move this to a new useState in APP.js that has an (empty?) dependancy 
// + this should run when the page is refreshed
// + loginAccess state should be set by this

// NOTES:
// Consider setting the inital useState to be the existance of JWT ?
// Remeber empty depandancies in useEffect create infinite GET requests from SupeBase










Verify the current remote URL by running the following command:

Copy code
git remote -v
This will display the current remote repository URL(s).

Update the remote URL to point to your new fork by running the following command:

arduino
Copy code
git remote set-url origin <new-fork-url>
Replace <new-fork-url> with the URL of your new forked repository. This command updates the remote URL of the repository named "origin" (default name for the main remote) to the new fork's URL.

Verify that the remote URL has been updated by running git remote -v again. The new fork's URL should now be displayed.
