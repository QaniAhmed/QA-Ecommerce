import React from 'react';
import './SuccessView.css';

const SuccessView = () => {
  return (
    <div className="success-wrapper">
      <div className="success-checkmark">
        <div className="check-icon">
          <span className="icon-line line-tip"></span>
          <span className="icon-line line-long"></span>
          <div className="icon-circle"></div>
          <div className="icon-fix"></div>
        </div>
      </div>
      <h2 className="success-message">Account Created!</h2>
      <p className="redirect-text">Redirecting you in a moment...</p>
    </div>
  );
};

export default SuccessView;