import React from 'react';

function loadingCards(Component) {
    return function loadingComponent({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;
        return (
            <p style={{ textAlign: 'center', fontSize: '30px' }}>
                Fetching some coffee, data coming soon...
            </p>
        );
    };
}

export default loadingCards;