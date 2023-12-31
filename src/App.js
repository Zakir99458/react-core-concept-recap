import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyComponent></MyComponent>
      <MyComponent></MyComponent>
      <MyComponent></MyComponent>
      <MyComponent></MyComponent>
    </div>
  );
}

function MyComponent(){

  return(
    <div className='myComponent'>
      <h2>My React Component</h2>
    </div>
  )
}
export default App;
