import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ title, children }) => <span className="label">
    <strong>{ title }</strong>: { children }
</span>;

Label.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
};

export default Label;