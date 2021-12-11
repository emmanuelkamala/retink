import React from 'react';
import oval from '../../assets/Oval.png';
import cap from '../../assets/cap.png';
import cap2 from '../../assets/cap2.png';
import cap3 from '../../assets/cap3.png';
import ikbar from '../../assets/Ikbal-3.png';
import './header.css';

const Header = () => {
  return (
    <div className="retink__header section__padding" id="home">
      <div className="retink__header-content">
        <h1 className="retink__header-title">
          What are you looking for?
        </h1>

        <div className="retink__header-content__text">
          <div className="retink__header-content__text-icons">
            <img src={oval} alt="oval" className="myOval" />
            <img src={cap} alt="cap" className="cap" />
            <img src={cap2} alt="cap" className="cap2" />
            <img src={cap3} alt="cap" className="cap3" />
          </div>
          <div className="retink__header-content__title">
            <p>Help me create a Marketing Plan!</p>
            <span>The Arctic Ocean freezes every winter and much <br />of the sea-ice then thaws every summer, and that</span>
          </div>
        </div>

        <div className="retink__header-content__text">
          <div className="retink__header-content__text-icons">
            <img src={oval} alt="oval" className="myOval" />
            <img src={cap} alt="cap" className="cap" />
            <img src={cap2} alt="cap" className="cap2" />
            <img src={cap3} alt="cap" className="cap3" />
          </div>
          <div className="retink__header-content__title">
            <p>I know what I am looking for</p>
            <span>The Arctic Ocean freezes every winter and much <br />of the sea-ice then thaws every summer, and that</span>
          </div>
        </div>
      </div>

      <div>
        <div className="retink__header-content__character">
          <img src={ikbar} alt="ikbar" />
        </div>
        
        <div className="retink__header-content_card1">
          <p>
            Hi there! Need help in creating a Marketing plan for your business? I can help you to create one using Retink AI engine.
          </p>
        </div>

        <div className="retink__header-content_card2">
          <p>
            Click on the options to get started
          </p>
        </div>
      </div>
      <div>
        <img src={oval} alt="oval" className="retink__header-oval1" />
        <img src={oval} alt="oval" className="retink__header-oval2" />
        <img src={oval} alt="oval" className="retink__header-oval3" />
        <img src={oval} alt="oval" className="retink__header-oval4" />
        <img src={oval} alt="oval" className="retink__header-oval5" />
        <img src={oval} alt="oval" className="retink__header-oval6" />
        <img src={oval} alt="oval" className="retink__header-oval7" />
        <img src={oval} alt="oval" className="retink__header-oval8" />
      </div>
    </div>
  )
}

export default Header;
