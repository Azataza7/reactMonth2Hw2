import React from 'react';

interface Props {
  onClick: boolean;
}

const Button: React.FC<Props> = ({onClick}) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>Show modal window</button>
  );
};

export default Button;