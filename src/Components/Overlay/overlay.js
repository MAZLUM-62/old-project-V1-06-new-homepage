// Importiere React und die CSS-Datei für das Overlay
import React from 'react';
import './overlay.css';

const Overlay = () => {

  // Die Funktion, die aufgerufen wird, wenn der Button geklickt wird
  const handleDiscordButtonClick = () => {
    // Hier kannst du den Link zu deinem Discord-Server einfügen
    const discordLink = 'https://discord.com/your-server-link';
    
    // Öffne den Discord-Link in einem neuen Tab
    window.open(discordLink, '_blank');
  };

  return (
    <div className="overlay-container">
      <button className="discord-button" onClick={handleDiscordButtonClick}>
      </button>
    </div>
  );
};

export default Overlay;
