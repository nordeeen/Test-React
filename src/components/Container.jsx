import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuote } from '../store/reducers';

const Container = () => {
  const [show, setShow] = useState(false);
  const [favQoutes, setFavQoutes] = useState([]);
  const [addQoutes, setAddQoutes] = useState([]);
  const [newQoutes, setNewQoutes] = useState('');
  const [showQ, setShowQ] = useState(false);

  const dispatch = useDispatch();
  const { items } = useSelector((state) => state);

  const handleGet = () => {
    dispatch(getQuote());
  };

  // useEffect(() => {
  //   dispatch(getQuote());
  // }, [dispatch]);

  const handleShow = () => {
    setFavQoutes((prevState) => [...prevState, items]);
    setShow(true);
  };

  const handleNewQoutes = () => {
    setAddQoutes((prevState) => [...prevState, newQoutes]);
    setShowQ(true);
    setNewQoutes('');
  };

  return (
    <div>
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <img
          src='https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg'
          alt='photo'
          style={{ width: '300px', height: 'auto' }}
        />
        <h1>Kanye-West Quote</h1>
        <div>
          <h2 style={{ fontStyle: 'bold' }}>{items}</h2>
        </div>
        <button onClick={handleGet}>Get Qoute</button>
        <button onClick={handleShow}>Add Favorite</button>
        {show && favQoutes.map((res, index) => <p key={index}>{res}</p>)}
        <br />
        <h1>My Qoute</h1>
        <input
          type='text'
          onChange={(e) => setNewQoutes(e.target.value)}
          value={newQoutes}
        />
        <button onClick={handleNewQoutes}>submit</button>
        {showQ && addQoutes.map((res, index) => <p key={index}>{res}</p>)}
      </div>
    </div>
  );
};

export default Container;
