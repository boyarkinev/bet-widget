import React from 'react';
import coins from '../../../images/coins.svg';
import check from '../../../images/check.svg';
import watch from '../../../images/watch.svg';

// isActive.id === item ? 'btn btn_is-Pressed' : 'btn'

const WidgetSpan = (props) => {
  return (
    <div className={props.isShown ? props.className : ''}>
      <div className="widget__span">
        <p className="widget__text">18:53:36</p>
        <p className="widget__text widget__text_light">Bet Win</p>
        <p className="widget__text widget__text_light widget__text_right-align">+2 550 &euro;</p>
        <p className="widget__text widget__text_light">25.5</p>
        <img src={coins} alt=""/>
      </div>
      <div className="widget__span">
        <p className="widget__text">18:53:36</p>
        <p className="widget__text widget__text_light">Bet Accepted</p>
        <p className="widget__text widget__text_light widget__text_right-align">0 &euro;</p>
        <p className="widget__text widget__text_light">3.54</p>
        <img src={check} alt=""/>
      </div>
      <div className="widget__span">
        <p className="widget__text">18:53:36</p>
        <p className="widget__text widget__text_light">Bet Received</p>
        <p className="widget__text widget__text_light widget__text_right-align">- 100 &euro;</p>
        <p className="widget__text widget__text_light">3.54</p>
        <img src={watch} alt=""/>
      </div>
    </div>
  )
}

export default WidgetSpan;