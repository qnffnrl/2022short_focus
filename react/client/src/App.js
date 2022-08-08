import logo from './logo.svg';
import './App.css';
import MyTag from './MyTag'
import MyTag2 from './MyTag2';

function App() {
  return (
    <div id='page'>
      <div>
        <h1>Hello React</h1>
        <h3>risker</h3>
      </div>
      <MyTag></MyTag>
      <MyTag2></MyTag2>
    </div>
  );
}

export default App;