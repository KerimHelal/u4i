import React from 'react';
import { Table, Container, Row, Col, Button } from 'react-bootstrap';
import Alert from 'react-s-alert';

const ProductsTable = ({ products, setProducts }) => {
  
  const [counter, setSeconds] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(counter => counter + 1);
    }, 1000);
    //here we clear the interval to avoid memory leakage
    return () => clearInterval(interval);
  }, []);

  //function responsible for rendering the table rows
  const renderProducts = () => {
    return products.map((product, i) => (
        <tr key={i}>
            <td>{i}</td>
            <td>{product.count}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    ));
  }
  
  //function responsible for randomizing the count & price values of the products
  const randomizeValues = () => {
    let randomizedProducts = products.map(product => {
        product.count = Math.round(Math.random() * (8 - 1) + 1);
        product.price = Math.round(Math.random() * (20 - 1) + 1);
        return product;
    });
    setProducts(randomizedProducts);
    Alert.success('Products Prices & Counts randomized successfully!');
  }

  //function responsible for getting the averga price
  const getAverage = () => {
    //get only the product price
    const sum = products.map(product => product.price);
    //reducer function with sum equation
    const reducer = (a, b) => (a + b);
    //run the reducer on the array
    const average = sum.reduce(reducer) / sum.length;
    //fix to 2 decimal places
    return average.toFixed(2);
  }

  return (
    <Container>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Count</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {renderProducts()}
            </tbody>
        </Table>
        <Row>
            <Col>
                <p>Total Count: {products.length}</p>
            </Col>
            <Col>
                <p>Average Price: {getAverage()}</p>
            </Col>
            <Col>
                <Button onClick={() => randomizeValues()} variant="outline-secondary">Click for random Values</Button>
            </Col>
        </Row>
        <Row>
            <Col>
                {counter}
            </Col>
        </Row>
    </Container>
  );
}

export default ProductsTable;
