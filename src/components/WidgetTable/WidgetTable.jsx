import './WidgetTable.css';

import React, {useState} from 'react'
import WidgetSpan from './WidgetSpan/WidgetSpan';
import setStatusIcon from '../../utils/set-status-icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WidgetTable = (props) => {
  const bet = props.bet;
  const [isShown, setIsShown] = useState(true);

  const handleClick = (e) => {
    isShown === false ? setIsShown(true) : setIsShown(false)
  }
  
  return (
    // <CustomScroll>
    <div className="widget__table-wrapper" onClick={handleClick}>
        <div className="widget__table">
          <p className="widget__id">ID {bet.id} </p>
          <p className="widget__action">
            <span className="widget__action-offside">{
            bet.action.offside === true ? 'Offside' : ''
            } </span>
              {/* or  */}
            <span className="widget__action-free-kick">{
              bet.action.freeKick === true ? 'Free Kick' : ''
            }</span>
              {/* or  */}
            <span className="widget__action-goal-kick">{
              bet.action.goalKick === true ? 'Goal Kick' : ''
            } </span>
              {/* or  */}
            <span className="widget__action-goal">{
              bet.action.goal === true ? 'Goal' : ''
            } </span>
              {/* or  */}
            <span className="widget__action-corner-kick">{
              bet.action.cornerKick === true ? 'Corner Kick' : ''
            } </span>
          </p>
          <FontAwesomeIcon className="widget__status" icon={setStatusIcon(bet.status)} />
          <div className="widget__text">{bet.time}</div>
          <div className="widget__money">
            <div className="widget__text">Bet:{bet.bet} &euro;</div>
            <div className="widget__text">Paid:{bet.paid} &euro;</div>
          </div>
          <div className="widget__text">{bet.tax}</div>
        </div>
      <WidgetSpan bet={bet} isShown={isShown} className={'widget__span_is-hidden'} />
    </div>
    // </CustomScroll>
  )
}

export default WidgetTable;