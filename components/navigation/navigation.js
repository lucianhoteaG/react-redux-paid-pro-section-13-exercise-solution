import React from 'react';
import PropTypes from 'prop-types';
import NavigationItem from '../navigation-item/navigation-item';

export default function Navigation ({ navigate, pages }) {
    const items = pages.map(
        ({ title, path }) => <NavigationItem key={path} path={path} onClick={navigate}>
            {title}
        </NavigationItem>
    );
    return (
        <div>{items}</div>
    );
}

Navigation.propTypes = {
    pages: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
    navigate: PropTypes.func.isRequired,
}