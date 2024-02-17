
// const sayHello = ()=>
// {
// console.log("Hello")
// }
console.log("hello")


const sayhello= (name,greeting)=>  
{
    console.log(greeting +"Hello  "+name)
}


sayhello("Ali","Good Afternoon")

const x=
{
name:"Zain" ,
semester:"4",
role:"Js developer",
show:function()
{
    console.log(`the name is ${this.name}`);
}
};
console.log(x.name,x.role)

x.show();

//Now We will see the 









// const x = {
//     name: "Zain",
//     semester: "4",
//     role: "Js developer",
  
//     // Arrow function as a method (shorthand method syntax)
//     show: () => {
//       console.log(`the name is ${x.name}`);
//     },
  
//     // Arrow function as a property
//     displaySemester: () => console.log(`Current semester: ${x.semester}`),
  
//     // Arrow function with parameters
//     greet: (greeting) => {
//       console.log(`${greeting}, ${x.name}!`);
//     },
  
//     // Arrow function using a block
//     calculate: (a, b) => {
//       let result = a + b;
//       console.log(`Result of calculation: ${result}`);
//     }
//   };
  
//   // Usage of the arrow functions
//   x.show(); // the name is Zain
//   x.displaySemester(); // Current semester: 4
//   x.greet("Hello"); // Hello, Zain!
//   x.calculate(5, 3); // Result of calculation: 8
  







const y =
{
   name:"zayn",
   role:"developer",
   exp:30,
   show :function(){
    let that=this
    console.log(this)
    setTimeout(function()
    {
    console.log(`The name is ${that.name}`)

    }, )

   }
  }