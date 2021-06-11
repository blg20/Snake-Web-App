import fc from "fast-check";
import get_snake_head from "../snake.js";

// describe("Check length of snake_head ", function () {

//     it("Snake_head is one unit long", function () {

//             const head = ___
            

//             if (answer !== reverse) {
//                 throw (
//                     `Expected "${string}" to reverse to "${answer}" ` +
//                     `insted we got "${reverse}"`
//     });

//     it("Reversing a string twice returns the original string", function () {

//         fc.assert(fc.property(
//             fc.string(),
//             function (str) {
//                 const reverseOnce = Reverse.reverse(str);
//                 const reverseTwice = Reverse.reverse(reverseOnce);
//                 return reverseTwice === str;
//             }
//         ));

//     });

//     it(
//         "The nth character in a string is equal to the (length - 1 - n)th " +
//         "character of its reversal",
//         function () {

//             fc.assert(fc.property(
//                 fc.string(),
//                 function (str) {
//                     const reversal = Reverse.reverse(str);
//                     const chars = str.split("");
//                     const reversal_chars = reversal.split("");

//                     return chars.every(
//                         (c, n) => c === reversal_chars[chars.length - 1 - n]
//                     );

//                 }
//             ));

//         }
//     );

// });
