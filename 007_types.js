// Boolean
var paidAccount = true;
// Number
var age = 33;
var taxRate = 8.9;
// String
var fullName = "Oscar";
// Array
var ages = [33, 28, 11];
// Tuple
var player;
player = [3, "John"];
// Enum
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["Approved"] = 0] = "Approved";
    ApprovalStatus[ApprovalStatus["Pending"] = 1] = "Pending";
    ApprovalStatus[ApprovalStatus["Rejected"] = 2] = "Rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
;
var job = ApprovalStatus.Pending;
// Any
var apiData = [123, "Oscar", true];
// Void 
function printOut(msg) {
    alert(msg);
}
console.log("A message to " + fullName + " with a lot of text");
//# sourceMappingURL=007_types.js.map