// code your solution here
function saturdayFun(activity = "roller-skate") 
{
    return `This Saturday, I want to ${activity}!`;
}

// MondayWork functionExpression
function mondayWork(activity = "go to the office")
{
    return `This Monday, I will ${activity}.`};
// flair Function
function wrapAdjective(flair="*")
{
    return function (adjective="special"){
        return `You are ${flair}${adjective}${flair}!`;
    }
} 

console.log(saturdayFun());
console.log(saturdayFun("bathe my dog"));

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction)("Awesome");



// function saturdayFun(opt="roller-skate"){


//     return `This Saturday, I want to ${opt}!`;
// }
// saturdayFun("bathe my dog");

// function mondayWork(opt="go to the office"){


//     return `This Monday, I will ${opt}.`;

// }
// mondayWork("work from home");
// function wrapAdjective(adjective="*"){

//     const innerfunction = function(parameter="special"){

//      return `You are ${adjective}${parameter}${adjective}!`;
//     };
//      return innerfunction;
// }
 
//  2 changes: 1 addition & 1 deletion2  test/indexTest.js


// @@ -11,7 +11,7 @@ describe("index.js", () => {
//   })

//     it("permits the default activity to be overriden", function() {

//       expect(saturdayFun("bathe my dog")).to.equal("This Saturday, I want to bathe my dog!")

//       expect(satrdayFun("bathe my dog")).to.equal("This Saturday, I want to bathe my dog!")

//     })
//   })