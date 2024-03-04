import React from 'react';
import './team.css';
import Spline from '@splinetool/react-spline';

const team = () => {
  return (
    <div className="team-content">
      <div className="team-content-header">
        <h1>Team</h1>
        <p>Das Team besteht aus folgenden Personen</p>
      </div>

      <div class="spline-object">
      <Spline scene="https://prod.spline.design/ZsMTcBVkUdfaA3RU/scene.splinecode" />
      </div>

 

        <div className="team-content-member-list">
          <div className='team-window'>
            <h2>Projektleitung</h2>
            <ul>
              <li>EASY.</li>
            </ul>
          </div>
          <div className='team-window'>
            <h2>Entwickler</h2>
            <ul>
              <li>SaiCode</li>
              <li>PERCY</li>
              <li>MAZO.</li>
            </ul>
          </div>
          <div className='team-window'>
            <h2>Team</h2>
            <ul>
              <li>belaawhiskey</li>
              <li>marcelk8414</li>
              <li>pachoooo</li>
              <li>savas</li>
              <li>sebsenxy0</li>
              <li>clipteclive</li>
              <li>.spleet</li>
              <li>Grando</li>
              <li>.kuhmor</li>
            </ul>
          </div>
          <div className='team-window'>
            <h2>Gamedesign</h2>
            <ul>
              <li>iwutzi</li>
              <li>baueey</li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default team;
