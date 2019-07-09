@detailedLog('billing')
class AccountsPayable {
    constructor() {}
}

@detailedLog('warehouse')
class ProductManager {
    constructor() {}
}

function detailedLog(dashboard: string) {
    if(dashboard == 'billing') {
        console.log('working with billing');
    } 

    return function (target: Object) {
        console.log("detailedLog has been called");
    }
}

var post = new AccountsPayable;
var post = new ProductManager;
