// Check data type using typeof
console.log("typeof of variables: ");

// String
let name = "Maaz";
let city = "Peshawar";
console.log("name:", name, "is", typeof name);                   // string
console.log("city:", city, "is", typeof city);                   // string

// Number
let age = 24;
console.log("age:", age, "is", typeof age);                      // number

// Boolean
let isStudent = true;
console.log("isStudent:", isStudent, "is", typeof isStudent);    // boolean

// Undefined
let notAssigned;
console.log("notAssigned:", notAssigned, "is", typeof notAssigned); // undefined

// Null
let emptyValue = null;
console.log("emptyValue:", emptyValue, "is", typeof emptyValue);    // object (known JS quirk!)

// Type Conversion
console.log("Type Conversion: ");

// String to Number using Number()
let strAge = "25";
let numAge = Number(strAge);
console.log("String to Number:", strAge, "is", numAge, "| type:", typeof numAge); // 25, number

// Number to String using String()
let num = 100;
let numToStr = String(num);
console.log("Number to String:", num, "is", numToStr, "| type:", typeof numToStr); // "100", string

// String to Boolean using Boolean()
let strTrue = "true";
let strToBool = Boolean(strTrue);
console.log("String to Boolean:", strTrue, "is", strToBool, "| type:", typeof strToBool); // true, boolean

// Convert a non-numeric string ("abc") into a number
let abcNumber = Number("abc");
console.log('Number("abc") is', abcNumber, "| type:", typeof abcNumber);
// The result is NaN (Not a Number). "abc" cannot be converted into a valid number

// Convert 0 and 1 into boolean
let zeroBool = Boolean(0);
let oneBool = Boolean(1);
console.log("Boolean(0) is", zeroBool, "| type:", typeof zeroBool);
console.log("Boolean(1) is", oneBool, "| type:", typeof oneBool);
// Boolean(0) gives false and Boolean(1) gives true.