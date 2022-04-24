import './Sidebar.css';
import React from 'react';
import Bitmoji from '../../assets/bitmoji.jpeg';

function SideBar() {
  const getDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = today.getMonth(); // January is 0!
    const yyyy = today.getFullYear();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[mm];
    return `${dd} ${month},${yyyy}`;
  };
  const getTime = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours %= 12;
    hours = hours || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const strTime = `${hours}:${minutes} ${ampm}`;
    return strTime;
  };
  const date = getDate();
  const time = getTime();
  return (
    <div className="sidebar">
      <div className="border">
        <img className="bitmoji" src={Bitmoji} alt="bitmoji" />
        <div className="welcome-text">
          HI, SHWETHAA
        </div>

        <div className="time">
          {time}
        </div>
        <div className="date">
          {date}
        </div>
      </div>

    </div>
  );
}

export default SideBar;
