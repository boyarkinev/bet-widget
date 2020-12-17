import './App.css';
import '../vendors/fonts/fonts.css';

import React from 'react';

import WidgetTableContainer from './WidgetTable/WidgetTable';
import DATA from '../data/DATA';

const App = () => {
  const WidgetTableData = DATA.map(bet => <WidgetTableContainer key={bet.id} bet={bet} />)

  return (
    <div className='App'>
      <div className='widget'>
        <h2 className='widget__title'>Bets</h2>          
          {WidgetTableData}
      </div>
    </div>
  );
}

export default App;
