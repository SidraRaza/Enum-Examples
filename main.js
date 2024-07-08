// 1. Numeric Enum
// Numeric enums are the default in TypeScript. The values start from 0 and increment by
//  1 for each member.
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var dir = Direction.Up;
console.log(dir); // Output: 0
//   2. String Enum
// String enums provide more meaningful and readable values when your code runs.
var Status;
(function (Status) {
    Status["Success"] = "SUCCESS";
    Status["Failure"] = "FAILURE";
    Status["Pending"] = "PENDING";
})(Status || (Status = {}));
var currentStatus = Status.Success;
console.log(currentStatus); // Output: SUCCESS
//   3. Heterogeneous Enum
// Heterogeneous enums mix string and numeric members. This is generally 
// discouraged due to potential issues.
var Mixed;
(function (Mixed) {
    Mixed[Mixed["Yes"] = 1] = "Yes";
    Mixed["No"] = "NO";
})(Mixed || (Mixed = {}));
var mixedValue = Mixed.Yes;
console.log(mixedValue); // Output: 1
//   4. Enum as a Function Argument
// Enums can be used to restrict possible values of function parameters,
//  improving type safety.
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
function getSizeLabel(size) {
    switch (size) {
        case Size.Small:
            return "Small";
        case Size.Medium:
            return "Medium";
        case Size.Large:
            return "Large";
    }
}
console.log(getSizeLabel(Size.Medium)); // Output: Medium
