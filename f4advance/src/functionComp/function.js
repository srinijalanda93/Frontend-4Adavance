//export const vari = <h1>Hello Function</h1>;

//Turning the above code into the function

/**
 * Function component are the function which take take single Argument in the form
 * of OBJECT and returns the computed JSX code
 * Rule of Functional Component
 * 1.Alway in Function Name in UpperCase which Babel compiler to indicates easier
 * 2.Either we can call the function within this {Var()}
 * 3.Or by using customized JSX <Var a={10} ,b={23}/>
 * 4.Always Customized function take only single Argument in Object
 * 5.Later we can deconstruct it
 */

/**THE HTML CODE 
 * const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<><Var a={10} b={'srinija'}/></>);
*/



// export const Var=() =>{
//     return (<h1>Hello Function</h1>)
// }

//POINT N0 -4
// export const Var = (obj) => {
//   return (
//     <>
//       <h1>The score is {obj.a}</h1>
//       <h2>The name is {obj.b}</h2>
//     </>
//   );
// };

//POINT N0 -5 Deconstructing
// export const Var = ({ a, b }) => {
//   return (
//     <>
//       <h1>The score is {a}</h1>
//       <h2>The name is {b}</h2>
//     </>
//   );
// };
