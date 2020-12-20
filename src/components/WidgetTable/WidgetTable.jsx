import './WidgetTable.css';

import React, { useState } from 'react';
import WidgetSpan from './WidgetSpan/WidgetSpan';
import setStatusIcon from '../../utils/set-status-icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WidgetTable = (props) => {
  const bet = props.bet;
  const [isShown, setIsShown] = useState(true);

  const handleClick = (e) => {
    isShown === false ? setIsShown(true) : setIsShown(false);
  };

  return (
    <div className='widget__table-wrapper' onClick={handleClick}>
      <div className='widget__table'>
        <p
          className={
            bet.status === 'paid' ? 'widget__id elem-green' : 'widget__id'
          }>
          ID {bet.id}{' '}
        </p>
        <p className='widget__action'>
          { 
            bet.actions.map(action => (
              action.status === true && 
              <span key={action.key} className={
                (action.actionName === 'Offside' && 'widget__action-offside') ||
                (action.actionName === 'Free Kick' && 'widget__action-free-kick') ||
                (action.actionName === 'Goal Kick' && 'widget__action-goal-kick') ||
                (action.actionName === 'Goal' && 'widget__action-goal') ||
                (action.actionName === 'Corner Kick' && 'widget__action-corner-kick')
              }>{action.actionName + ' '}</span>
            ))
          }
        </p>
        <FontAwesomeIcon
          className={
            bet.status === 'paid'
              ? 'widget__status elem-green'
              : 'widget__status'
          }
          icon={setStatusIcon(bet.status)}
        />
        <div
          className={
            bet.status === 'paid' ? 'widget__text elem-green' : 'widget__text'
          }>
          {bet.time}
        </div>
        <div className={'widget__money'}>
          <div
            className={
              bet.status === 'paid' ? 'widget__text elem-green' : 'widget__text'
            }>
            Bet:{bet.bet} &euro;
          </div>
          <div
            className={
              bet.status === 'paid' ? 'widget__text elem-green' : 'widget__text'
            }>
            Paid:{bet.paid} &euro;
          </div>
        </div>
        <div
          className={
            bet.status === 'paid' ? 'widget__text elem-green' : 'widget__text'
          }>
          {bet.tax}
        </div>
      </div>
      <WidgetSpan
        bet={bet}
        isShown={isShown}
        className={'widget__span_is-hidden'}
      />
    </div>
  );
};

export default WidgetTable;
