import React from 'react';
import Navigation from '../navigation/navigation.container';

export default ({ children }) => (
    <div>
        <Navigation />
        {children}
    </div>
);