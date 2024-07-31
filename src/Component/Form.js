import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

const Form = () => {
  const [origin, setOrigin] = useState('SYD');
  const [destination, setDestination] = useState('JFK');
  const [cabin, setCabin] = useState('economy');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/search', { origin, destination, cabin });
      setResult(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResult({ data: [] });
    }
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <h1>Choose Origin & Destination Airports:</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="origin">Origin</label>
            <select id="origin" value={origin} onChange={(e) => setOrigin(e.target.value)}>
              <option value="JFK">JFK</option>
              <option value="DEL">DEL</option>
              <option value="SYD">SYD</option>
              <option value="BOM">BOM</option>
              <option value="BNE">BNE</option>
              <option value="BLR">BLR</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="destination">Destination</label>
            <select id="destination" value={destination} onChange={(e) => setDestination(e.target.value)}>
              <option value="JFK">JFK</option>
              <option value="DEL">DEL</option>
              <option value="SYD">SYD</option>
              <option value="LHR">LHR</option>
              <option value="CDG">CDG</option>
              <option value="DOH">DOH</option>
              <option value="SIN">SIN</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="cabin">Cabin Selection</label>
            <select id="cabin" value={cabin} onChange={(e) => setCabin(e.target.value)}>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first">First</option>
            </select>
          </div>
          <button className="search-button" type="submit">Search</button>
        </form>
      </div>
      {result && (
        <div className="result-container">
          <h2>Search Results:</h2>
          <div className="result-grid">
            {result.data.length > 0 ? (
              result.data.map((item, index) => (
                <div key={index} className="result-item">
                  <img src="data:image/jpeg;base64,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" alt="Logo" className="logo" />
                  <h3>{item.partner_program}</h3>
                  <p>{origin} ➔ {destination}</p>
                  <p>{new Date().toISOString().split('T')[0]} - {new Date().toISOString().split('T')[0]}</p>
                  <p>{item.min_business_miles !== 'N/A' ? `${item.min_business_miles} + ${item.min_business_tax}` : 'N/A'} Min Business Miles</p>
                  <p>{item.min_economy_miles !== 'N/A' ? `${item.min_economy_miles} + ${item.min_economy_tax}` : 'N/A'} Min Economy Miles</p>
                  <p>{item.min_first_miles !== 'N/A' ? `${item.min_first_miles} + ${item.min_first_tax}` : 'N/A'} Min First Miles</p>
                </div>
              ))
            ) : (
              <p>Try another search route.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
