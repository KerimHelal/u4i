import React from 'react';
import Alert from 'react-s-alert';
import ProductsTable from './components/ProductsTable';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';

const App = () => {
  //initial products state in the <App /> component as specified in the documentation
  const [products, setProducts] = React.useState([
    {
    count: 3,
    name: 'Orange',
    price: 15
    },
    {
    count: 1,
    name: 'Apple',
    price: 4
    },
    {
    count: 6,
    name: 'Carrot',
    price: 9
    }
    ]);

  return (
    <div className="App">
      <header className="App-header">
        {/*Here we pass the initial state and the set state function as props to the component for live updates*/}
        <ProductsTable products={products} setProducts={setProducts} />
      </header>
      <Alert stack={{limit: 3}} />
    </div>
  );
}

export default App;
