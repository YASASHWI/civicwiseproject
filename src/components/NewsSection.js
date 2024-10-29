import React from 'react';
import './styles/NewsSection.css';

const newsData = [
  { title: "New Amendments Proposed", description: "The government has proposed new amendments..." },
  { title: "Supreme Court Ruling", description: "The Supreme Court ruled in favor of the right to privacy..." },
  { title: "Supreme Court Ruling", description: "This landmark decision emphasizes the importance of personal freedom..." }
];

const NewsSection = () => (
  <div className="news-section">
    <h2>Latest News</h2>
    <div className="news-items">
      {newsData.map((news, index) => (
        <div key={index} className="news-item">
          <h3>{news.title}</h3>
          <p>{news.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default NewsSection;
