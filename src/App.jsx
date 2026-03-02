// App.jsx
import "./App.css";
import Display from "./Display";



// start of function App()
function App() {
    // start of return
  return (
       // Start of div App
    <div className="App">
      
      <h2>“Wheather or Not, Here’s the Weather”</h2>
      <p className="date">Date: {new Date().toLocaleDateString()}</p>
      <p className="time">Time: {new Date().toLocaleTimeString()}</p>
         
      <Display />     
    </div>
    // end of div App
  );
  // end of return
}
// end of function App()

export default App;
