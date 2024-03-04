import './regeln.css';
import './regeln.txt';

const Regeln = () => {
    const regeln = require('./regeln.txt');
    console.log(regeln);

  return (
    <div class="regeln-container">

      <div className='regeln-container-header'>
        <h1>Regelwerk</h1>
      </div>

        <div className='regeln-container-content'>
        <p>Ein Verstoß gegen die hier veröffentlichten Regeln kann einen temporären oder permanenten Ausschluss aus der Community nach sich ziehen.</p>
        </div>

  
        <div  className="regeln-container-content">
          <h2>§1 bla bla </h2>
          <p>1. blu blu</p>
        </div>
      
    </div>
  );
};

export default Regeln;

