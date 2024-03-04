import React, { useState } from 'react';
import './faq.css';

const FAQ = () => {
  const faqData = [
    {
      question: 'Tastaturbelegung',
      answer: 'Antwort auf Frage 1 hier.',
    },
    {
      question: 'Welche Spieleauflösung ist erlaubt?',
      answer: 'Antwort auf Frage 2 hier.',
    },
    {
      question: 'Welche GTA Grafikmods sind erlaubt?',
      answer: 'Antwort auf Frage 3 hier.',
    },
    {
      question: 'Wo kann ich ein Ticket erstellen?',
      answer: 'Antwort auf Frage 4 hier.',
    },
    {
      question: 'Wie kann ich auf dem Roleplay Server Mitspielen?',
      answer: 'Antwort auf Frage 5 hier.',
    },
    {
      question: 'Wie kann ich das Projekt unterstützen?',
      answer: 'Antwort auf Frage 5 hier.',
    },
    {
      question: 'Wie erstelle ich ein Account?',
      answer: 'Antwort auf Frage 5 hier.',
    },
  ];

  const [dropdowns, setDropdowns] = useState(Array.from({ length: faqData.length }, () => false));

  const toggleDropdown = (index) => {
    setDropdowns((prevDropdowns) =>
      prevDropdowns.map((dropdown, i) => (i === index ? !dropdown : false))
    );
  };

  return (
    <div className="faq-container">
      <div className="faq-container-header">
        <h1>FAQ</h1>
      </div>

      <div className="faq-container-content">
        <p className="faq-q-text">Du hast Fragen? Wir haben Antworten!</p>
      </div>

      <div className="faq-container-content">
        {faqData.map((faq, index) => (
          <div key={index} className={`faq-dropdown ${dropdowns[index] ? 'open' : ''}`}>
            <div className="faq-question" onClick={() => toggleDropdown(index)}>
              {faq.question}
              <div className={`faq-arrow ${dropdowns[index] ? 'open' : ''}`}>&#x25BC;</div>
            </div>
            {dropdowns[index] && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
