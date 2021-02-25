import './App.css';
import HomePage from './homepage/homepage.component';
import { Route } from 'react-router-dom';
import Shop from './component/shop/shop.component';
import Header from './component/header/header.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={Shop} />
    </div>
  );
}

export default App;
