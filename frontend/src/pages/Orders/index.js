import React, { useEffect, useState } from 'react';
import { FiSearch, FiTrash2, FiCheck } from 'react-icons/fi';

import './styles.css';
import api from '../../services/api';
import parseArrayAsString from '../../utils/parseArrayAsString';

export default function Order() {
  const [orders, setOrders] = useState([]);
  const [searchedOrders, setSearchedOrders] = useState([]);
  const [specificOrder, setSpesificOrder] = useState({});
  const [displaySectionRight, setDisplaySectionRight] = useState("hidden");
  const [search, setSearch] = useState("");

  const pizzariaName = localStorage.getItem('pizzariaName');
  const pizzariaID = localStorage.getItem('pizzariaID');

  useEffect(() => {
    api.get('/order', {
      headers: {
        id: pizzariaID
      }
    }).then(response => {
      setOrders(response.data.slice(0).reverse())
      setSearchedOrders(response.data.slice(0).reverse())
    });
  }, [pizzariaID]);

  useEffect(() => {
    let itens = [];
    orders.map(order => {
      if (order.user_name.toLowerCase().match(search.toLowerCase())) {
        itens.push(order);
      }
    });
    setSearchedOrders(itens);
  }, [search]);

  function handleClickOrder(id) {
    searchedOrders.map(order => {
      if (order.id === id) {
        setSpesificOrder(order);
        setDisplaySectionRight("show");
      }
    });
  }

  async function handleDeleteOrder(id) {
    await api.delete(`order/${id}`);
    setOrders(orders.filter(order => order.id !== id));
    setSearchedOrders(orders.filter(order => order.id !== id));
    setSpesificOrder({});
    setDisplaySectionRight("hidden");
  }

  async function handleCheckOrder(id) {
    await api.put(`order/${id}`);
    await api.get('/order', {
      headers: {
        id: pizzariaID
      }
    }).then(response => {
      setOrders(response.data.slice(0).reverse())
      setSearchedOrders(response.data.slice(0).reverse())
    });
  }

  return (
    <div className="orders-container">
      <section className="left">
        <span className="header">
          <h1>{pizzariaName}</h1>
        </span>
        <span className="search">
          <input
            type="text"
            placeholder="Buscar cliente"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <FiSearch color="#585858" />
        </span>
        <ul>
          {searchedOrders.map(order => (
            <li key={order.id}>
              <span onClick={() => handleClickOrder(order.id)} className="order">
                <h3>Pizza {order.sizePizza} - {order.user_name}</h3>
                <FiCheck
                  onClick={() => { handleCheckOrder(order.id) }}
                  size={24}
                  color={(order.did === 0) ? "#aaa" : "#FF354E"} />
              </span>
            </li>
          ))}
        </ul>
      </section>
      <section className={`right ${displaySectionRight}`}>
        <span className="header">
          <h2>{specificOrder.user_name}</h2>
          <FiTrash2 onClick={() => { handleDeleteOrder(specificOrder.id) }} size={28} color="#fff" />
        </span>
        <div className="order">
          <div className="snack">
            <section className="pizza">
              <h4 className="size">Pizza {specificOrder.sizePizza}</h4>
              <h5 className="flavors">{parseArrayAsString(specificOrder.flavorsPizza)}</h5>
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
