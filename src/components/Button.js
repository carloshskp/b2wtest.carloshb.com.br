import React from 'react';
import PropTypes from 'prop-types';

const Button  = ({ text, action, color }) => <button className={color} onClick={action}>
    { text }
</button>;

Button.propTypes = {
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    color: PropTypes.string
};

Button.defaultProps = {
    color: 'red'
};

export default Button;