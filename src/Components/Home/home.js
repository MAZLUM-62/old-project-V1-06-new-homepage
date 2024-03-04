// Home.js
import React from 'react';

import './home.css';

const Home = () => {
    const BeispielStreamerListe = [
        {
            Streamer: 'Obey_Xyoo',
            StreamerLink: 'https://www.twitch.tv/obey_xyoo',
            StreamerLogo: 'https://static-cdn.jtvnw.net/jtv_user_pictures/51cbb4d1-0f0e-4c9e-99e4-f575018c3da6-profile_image-300x300.png',
        },
    ];
    return (
        <div className="main-container">
            <div className='main-container-image-content'>
                <div className='main-container-image-content-block-1'>
                    <div className='main-contianer-image-content-block-text'>
                        <h1>WHITELIST</h1>
                        <p>BEGINN SCHON HEUTE DEINE EIGENE GESCHICHTE!</p>
                    </div>
                </div>
                <div className='main-container-image-content-block-2'>
                    <div className='main-contianer-image-content-block-text'>
                        <h1>SERVER <br></br> REGELWERK</h1>
                        <p>LIES DIR DIE SERVER-REGELN DURCH BEVOR ES LOS GEHT!</p>
                    </div>
                </div>
            </div>

            <div className='main-container-text-content'>
                <div className='main-container-text-content-1'>
                    <h1>Behörde</h1>
                    <p> Central-V bietet eine breite Palette von Behördenaktivitäten an, darunter Verbrecherjagd im Los Santos Police Department, Feuerwehreinsätze im Los Santos Fire Department, Gefangenenbetreuung im United States Marshals Service, Küstensicherung mit der San Andreas National Guard, Rechtsprechung im Department of Justice, Personentransport bei Downtown Cab Company oder Journalismus bei Weazel News.</p>
                </div>
                <div className='main-container-text-content-1'>
                    <h1>Crime</h1>
                    <p>Steige in Central-V von einem Kleinkriminellen zu einem gefürchteten Verbrecher auf. Gründe deine eigene Bande, einen Motorradclub, eine Mafia oder forme deine Vorstellung von Kriminalität. Kontrolliere den Drogenmarkt, werde Waffenhändler und beherrsche die Stadt durch Schutzgelderpressung. Trotz Konkurrenz sind Zusammenarbeit und Allianzen zwischen kriminellen Gruppen auf Central-V entscheidend für den Erfolg.</p>
                </div>
                <div className='main-container-text-content-1'>
                    <h1>Wirtschaft</h1>
                    <p> Central-V bietet zahlreiche Möglichkeiten, dein Leben als Arbeiter oder Unternehmer zu finanzieren. Vom traditionellen Arbeiten auf dem Feld bis zur Gründung eigener Unternehmen in Gastronomie oder Dienstleistung: Die Plattform fördert individuelle Ideen und freie Entfaltung in der Wirtschaft. Diverse Minijobs wie Müllabfuhr, Geldtransporte oder Tauchgänge bieten schnelle Verdienstmöglichkeiten.</p>
                </div>
                <div className='main-container-text-content-1'>
                    <h1>Performance</h1>
                    <p>Der Gameserver von Central-V auf der Plattform alt:V bietet ein perfekt synchronisiertes Multiplayer-Erlebnis. Die Stabilität und Verfügbarkeit werden durch NodeJS & Vue sichergestellt. Die Entwickler konzentrieren sich auf die Qualitätsüberprüfung bestehender Systeme und Funktionen sowie auf die kontinuierliche Entwicklung neuer Features für alle Spielergruppen der Community.</p>
                </div>
            </div>


            <div className='main-container-live-content'>
                <div className='main-container-live-header'>
                    <h1> Streaming Partner</h1>
                </div>
                <div className="slider">
                    <div className="slide-track">
                        <div className="slide">
                            <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/51cbb4d1-0f0e-4c9e-99e4-f575018c3da6-profile_image-300x300.png" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/a6ee9e8d-bfd4-4472-8103-6ed283b30a76-profile_image-300x300.png" alt="" />
                        </div>

                        <div className="slide">
                            <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/51cbb4d1-0f0e-4c9e-99e4-f575018c3da6-profile_image-300x300.png" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/a6ee9e8d-bfd4-4472-8103-6ed283b30a76-profile_image-300x300.png" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/51cbb4d1-0f0e-4c9e-99e4-f575018c3da6-profile_image-300x300.png" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/a6ee9e8d-bfd4-4472-8103-6ed283b30a76-profile_image-300x300.png" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/51cbb4d1-0f0e-4c9e-99e4-f575018c3da6-profile_image-300x300.png" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/a6ee9e8d-bfd4-4472-8103-6ed283b30a76-profile_image-300x300.png" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/51cbb4d1-0f0e-4c9e-99e4-f575018c3da6-profile_image-300x300.png" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/a6ee9e8d-bfd4-4472-8103-6ed283b30a76-profile_image-300x300.png" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/51cbb4d1-0f0e-4c9e-99e4-f575018c3da6-profile_image-300x300.png" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/a6ee9e8d-bfd4-4472-8103-6ed283b30a76-profile_image-300x300.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* Liste in ein random array packen für die Streaming Partner */
export default Home;
