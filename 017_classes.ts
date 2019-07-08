class Invoice {
    companyProfile: string;

    constructor(public name: string, public city: string, public state: string) {
        this.companyProfile = name + ", " + city + ", " + state;
    }
}

var googleInvoice = new Invoice('Google', 'Mountain View', "California");
var yahooInvoice = new Invoice('Yahoo', 'SF', "California");

console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);