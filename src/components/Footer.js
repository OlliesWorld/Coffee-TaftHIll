import React from 'react';
import fbicon from '../assets/images/icons8-facebook-48.png';

export default function Footer() {
  return (
    <footer className="footer text-faded  py-3">
      <div className="footer-sub mt-5">
        <p className="mt-0">&copy; {new Date().getFullYear()}  Taft Hill Acres</p>
        <p className="mt-0">Made with <span role="img" aria-label="blue heart">💙</span> by<a href="olliesworld.rocks">Ollie's World</a></p>
      </div>
      <div className="fb-container">
        <p>
          <a href="https://www.facebook.com/TaftHillAcres/?ref=hl" aria="Facebook Icon" class="fb-btn"><img src={fbicon} alt="Facebook Icon" /></a>
        </p>
      </div>

    </footer >
  );
}
