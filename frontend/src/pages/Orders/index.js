import React, { useEffect, useState } from 'react';
import { FiSearch, FiTrash2, FiCheck } from 'react-icons/fi';

import './styles.css';
import api from '../../services/api';
import parseArrayAsString from '../../utils/parseArrayAsString';

export default function Order() {
  const [orders, setOrders] = useState([]);
  const [specificOrder, setSpesificOrder] = useState({
    value: 0
  });
  const [userFromOrder, setUserFromOrder] = useState({});

  const pizzariaName = localStorage.getItem('pizzariaName');
  const pizzariaID = localStorage.getItem('pizzariaID');

  useEffect(() => {
    api.get('/order', {
      headers: {
        id: pizzariaID
      }
    }).then(response => {
      setOrders(response.data.slice(0).reverse())
    });
  }, [pizzariaID]);

  function handleClickOrder(id) {
    orders.map(order => {
      if (order.id === id) {
        api.get(`user/${order.user}`)
          .then(response => {
            setUserFromOrder(response.data)
          })
        setSpesificOrder(order);
      }
      return order;
    });
  }

  return (
    <div className="orders-container">
      <section className="left">
        <span className="header">
          <h1>{pizzariaName}</h1>
        </span>
        <span className="search">
          <input type="text" placeholder="Buscar" />
          <FiSearch color="#585858" />
        </span>
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              <span onClick={() => handleClickOrder(order.id)} className="order">
                <h3>Pizza {order.sizePizza}, {JSON.parse(order.drinks)}</h3>
                <FiCheck size={24} color="#aaa" />
              </span>
            </li>
          ))}
        </ul>
      </section>
      <section className="right">
        <span className="header">
          <h2>{userFromOrder.name}</h2>
          <FiTrash2 onClick={() => { }} size={28} color="#fff" />
        </span>
        <div className="order">
          <div className="snack">
            <section className="pizza">
              <h4 className="size">Pizza {specificOrder.sizePizza}</h4>
              <h5 className="flavors">{specificOrder.flavorsPizza}</h5>
              <h5 className="flavors">Borda: {parseArrayAsString(specificOrder.flavorEdge)}</h5>
            </section>
            <section className="drinks">
              <h4>Bebidas:</h4>
              <h5 className="drink">{parseArrayAsString(specificOrder.drinks)}</h5>
            </section>
          </div>
          <div className="address">{specificOrder.address}</div>
          <div className="value">
            <h2 className="total">Total:
              {Intl
                .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                .format(specificOrder.value)
              }
            </h2>
          </div>
        </div>
      </section>
    </div>
  )
}
