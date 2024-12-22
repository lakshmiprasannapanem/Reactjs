import UseReducerComp from "./components/use-reducer/UseReducerComp";
import DomRef from "./components/useRef/DomRef";
import UseRefC from "./components/useref/UseRefC";
import Counter from "./components/UseReducer-Intro-To-Redux/Counter";
import "./App.css";
function App(){
  return(
    <div className="App">
    {/* <UseReducerComp/>
    <hr/>
    <DomRef/>
    <br/>
    <br />
    <hr/>
<UseRefC/> */}
<Counter/>
    </div>
  )
}
export default App;