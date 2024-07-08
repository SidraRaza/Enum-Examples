// 1. Numeric Enum
// Numeric enums are the default in TypeScript. The values start from 0 and increment by
//  1 for each member.

enum Direction {
    Up,
    Down,
    Left,
    Right
  }
  
  let dir: Direction = Direction.Up;
  console.log(dir); // Output: 0

//   2. String Enum
// String enums provide more meaningful and readable values when your code runs.

enum Status {
    Success = "SUCCESS",
    Failure = "FAILURE",
    Pending = "PENDING"
  }
  
  let currentStatus: Status = Status.Success;
  console.log(currentStatus); // Output: SUCCESS

  
//   3. Heterogeneous Enum
// Heterogeneous enums mix string and numeric members. This is generally 
// discouraged due to potential issues.

enum Mixed {
    Yes = 1,
    No = "NO"
  }
  
  let mixedValue: Mixed = Mixed.Yes;
  console.log(mixedValue); // Output: 1

  
//   4. Enum as a Function Argument
// Enums can be used to restrict possible values of function parameters,
//  improving type safety.

enum Size {
  Small,
  Medium,
  Large
}

function getSizeLabel(size: Size): string {
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
