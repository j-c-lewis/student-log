// import logo from './logo.svg';
import './App.css';
import {SchoolRegistry} from "./Pages/SchoolRegistry";
import {StudentRegistry} from "./Pages/StudentRegistry";
import StudAndSchReg from "./Pages/StudAndSchReg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-2xl">Student Registry</h1>

      </header>
        <body className="App-body bg-amber-200 h-5/6">
            <StudentRegistry /><br/>
            <SchoolRegistry /><br/>
            <StudAndSchReg />
        </body>
    </div>
  );
}

export default App;
