import React, { useState } from 'react';
import './news.css';

const NEWS = () => {
    const newsData = [
      {
        version: 'Version 1.0.4',
        date: '2022-01-10',
        features: [
          'Darkmode',
          'New Cars',
          'New Jobs.'
        ],
        fixes: [
          'Darkmode',
          'ASF',
          'XAXSDAS'
        ],
        enhancements: [
          'XAXSDAS',
          'XAXSDAS',
          'XAXSDAS'
        ],
      },
      {
        version: 'Version 1.0.2',
        date: '2022-01-10',
        features: [
          'Darkmode',
          'New Cars',
          'New Jobs.'
        ],
        fixes: [
          'Darkmode',
          'ASF',
          'XAXSDAS'
        ],
        enhancements: [
          'XAXSDAS',
          'XAXSDAS',
          'XAXSDAS'
        ],
      },
      {
        version: 'Version 1.0.1',
        date: '2022-01-10',
        features: [
          'Darkmode',
          'New Cars',
          'New Jobs.'
        ],
        fixes: [
          'Darkmode',
          'ASF',
          'XAXSDAS'
        ],
        enhancements: [
          'XAXSDAS',
          'XAXSDAS',
          'XAXSDAS'
        ],
      },
      {
        version: 'Version 1.0.0',
        date: '2022-01-01',
        features: [
          'Darkmode',
          'New Cars',
          'New Jobs.'
        ],
        fixes: [
          'Darkmode',
          'ASF',
          'XAXSDAS'
        ],
        enhancements: [
          'XAXSDAS',
          'XAXSDAS',
          'XAXSDAS'
        ],
      },
    ];

    const [dropdowns, setDropdowns] = useState(Array.from({ length: newsData.length }, () => false));

    const toggleDropdown = (index) => {
      setDropdowns((prevDropdowns) =>
        prevDropdowns.map((dropdown, i) => (i === index ? !dropdown : false))
      );
    };
  
    const renderList = (items) => (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  
    return (
      <div className="news-container">
        <div className="news-container-header">
          <h1>News</h1>
        </div>
  
        <div className="news-container-content">
          <p className="news-q-text">Aktuelle Neuigkeiten</p>
        </div>
  
        <div className="news-container-content">
          {newsData.map((news, index) => (
            <div key={index} className={`news-dropdown ${dropdowns[index] ? 'open' : ''}`}>
              <div className="news-question" onClick={() => toggleDropdown(index)}>
                {`${news.version} - ${news.date}`}
                <div className={`news-arrow ${dropdowns[index] ? 'open' : ''}`}>&#x25BC;</div>
              </div>
              {dropdowns[index] && (
                <div className="news-answer">
                  <h3>Features:</h3>
                  {renderList(news.features)}
                  <h3>Fixes:</h3>
                  {renderList(news.fixes)}
                  <h3>Enhancements:</h3>
                  {renderList(news.enhancements)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default NEWS;