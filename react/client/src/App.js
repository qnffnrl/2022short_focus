import './App.css';
import MyTag from './MyTag'
import MyTag2 from './MyTag2';
import MyTag3 from './MyTag3';
import LC from './LifeCycle';
import Class from './Class';

function App() {
  return (
    <div id='page'>
        <h1>Hello React</h1>
        <h3>risker</h3>
        <MyTag></MyTag>
        <MyTag2></MyTag2>
        <MyTag3></MyTag3>
        <LC userName="Hong"></LC>
        <Class></Class>
    </div>
  );
}

export default App;