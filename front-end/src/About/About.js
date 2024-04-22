import React from 'react';

function About() {
    return (
        <div className="about-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h1 className="about-title" style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--color-one)' }}>About XPression</h1>
            <p className="about-text" style={{ fontSize: '1.1rem', lineHeight: '1.6', border: '2px solid var(--color-one)', padding: '20px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
}

export default About;
