import './App.css';
import HomePage from './homepage/homepage.component';
import { Route } from 'react-router-dom';

const HatsPage =() =>{
  return(
    <div>
      <h1>Hats Page</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;
