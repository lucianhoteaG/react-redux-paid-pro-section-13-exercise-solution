import React from 'react';
import PropTypes from 'prop-types';

export default function NavigationItem ({ path, onClick, children }) {
    return (
        <div>
            <a
                href={path}
                onClick={(e) => {
                    e.preventDefault();
                    onClick(path);
                }}
            >
                {children}
            </a>
        </div>
    )
}

NavigationItem.propTypes = {
    path: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};