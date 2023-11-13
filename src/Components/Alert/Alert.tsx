import React from 'react';


const Alert = ({type, onDismiss, children}) => {
  return (
    <div className={`alert alert-${type}`}>
      {children}
      {onDismiss && <button type="button" className="close-btn alert-btn" onClick={onDismiss}/>}
    </div>
  );
};

export default Alert;