import React from 'react';
import './Nomatch.css'
const Nomatch = () => {
    return (
        <div className="error">
            <h3>Your search  - did not match any documents.</h3>
            <h4>Suggestions:</h4>
            <p>Make sure that all words are spelled correctly.</p>
            <p>Try different keywords.</p>
            <p>Try more general keywords.</p>
        </div>
    );
};

export default Nomatch;






