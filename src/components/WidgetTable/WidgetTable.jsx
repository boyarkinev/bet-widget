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
          <span className='widget__action-offside'>
            {bet.action.offside === true ? 'Offside' : ''}{' '}
          </span>
          {/* or  */}
          <span className='widget__action-free-kick'>
            {bet.action.freeKick === true ? 'Free Kick' : ''}
          </span>
          {/* or  */}
          <span className='widget__action-goal-kick'>
            {bet.action.goalKick === true ? 'Goal Kick' : ''}{' '}
          </span>
          {/* or  */}
          <span className='widget__action-goal'>
            {bet.action.goal === true ? 'Goal' : ''}{' '}
          </span>
          {/* or  */}
          <span className='widget__action-corner-kick'>
            {bet.action.cornerKick === true ? 'Corner Kick' : ''}{' '}
          </span>
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
