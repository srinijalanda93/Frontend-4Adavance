import React from "react";
import ReactDOM from "react-dom/client";


const heading=React.createElement("h1",{id:'test',className:'abc',style:{color:'pink'}},"React Intro")
const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)

/**Concepts: NODE INSTALLATION
 * 
 * Use of CDN link 
 * installation of application using npx create-react-app "appname"
 * Start the application npm start /npm build/npm test -->using the scripts in package.json
 * without scripts we can also run the applcation using npx  react-scripts start
 * package-lock.json ->about the module version details
 * npm -> node package manager holds the node packages
 * npx -> used to execute the node module
 */

/** Concept :Bundler
 * https://www.showwcase.com/article/26900/what-is-a-bundler
 * Bundler :A bundler in React is a tool that allows developers
 *  to package their code into a single file or bundle
 * Example:the index.js are bundler to the index.html
 */

/** Concept :Babel compiler
 * Used to convert the JSX code into the react Element 
 * Babel compiler comes into picture during that process
 */


/**
 * JSX and React are two separate things. 
 * They’re often used together, but you can use them independently of each other.
 *  JSX is a syntax extension, while React is a JavaScript library.
 */


/**Concept :JSX
 * JSX ->javascript extension markup language 
 * JSX: Putting markup into JavaScript 
 * https://react.dev/learn/writing-markup-with-jsx
 * it contains the customized and Html tags (react Element)
 * Rules for JSX:
 * 1.always use () for better practice
 * 2.it will take only one JSX code 
 * 3. To overcome the point 2 use <></> we call it React.Fra
 * 
 */