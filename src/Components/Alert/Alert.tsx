import React from 'react';

interface Props {
  onDismiss: () => void;
  type: string;
  children: React.ReactNode
}

const Alert: React.FC<Props> = ({type, onDismiss, children}) => {
  return (
    <div className={`alert alert-${type}`}>
      {children}
      {onDismiss && <button type="button" className="close-btn alert-btn" onClick={onDismiss}/>}
    </div>
  );
};

export default Alert;