import React from 'react';
import PropTypes from 'prop-types';

const Button  = ({ text, action }) => <button onClick={action}>
    { text }
</button>;

Button.propTypes = {
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
};

export default Button;