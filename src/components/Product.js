import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import ProdCard from './ProdCard';
import Row from 'react-bootstrap/Row';

const Product = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const rootUrl = 'http://localhost:1337';

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      const response = await axios.get(`${rootUrl}/products`);

      setData(response.data);
      setLoaded(true);
      // setLoading(false);
    };

    fetchData();
  }, [rootUrl]);

  // map data into cards
  const productList = data.map((item) => {
    console.log(item);

    const { id, name, country, instock, cost, pics } = item;
    console.log(pics);
    return (
      <ProdCard
        key={id}
        id={id}
        name={name}
        country={country}
        instock={instock}
        cost={cost}
        pic={pics ? `${rootUrl}${pics.url}` : `#`}
      />
    );
  });

  console.log(data.length);
  console.log(data);

  return (
    <div>
      <Container className="prod-container" /*fluid*/>{productList}</Container>
    </div>
  );
};

export default Product;
