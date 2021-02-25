import './App.css';
import HomePage from './homepage/homepage.component';
import { Route } from 'react-router-dom';
import Shop from './component/shop/shop.component';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={Shop} />
    </div>
  );
}

export default App;
