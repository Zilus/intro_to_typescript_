// Boolean
let paidAccount: boolean = true;

// Number
let age : number = 33;
let taxRate : number = 8.9;

// String
let fullName : string = "Oscar";

// Array
let ages : number[] = [33, 28, 11];

// Tuple
let player : [number, string];
player = [3, "John"];

// Enum
enum ApprovalStatus {Approved, Pending, Rejected};
let job : ApprovalStatus = ApprovalStatus.Pending;

// Any
let apiData : any[] = [123, "Oscar", true];

// Void 
function printOut(msg: string): void {
    alert(msg);
}