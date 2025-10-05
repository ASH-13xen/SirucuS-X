import React from 'react';
import { Link } from 'react-router-dom';


const WebDevbar = () => {
    return (
        <div style={{alignContent: 'center' }}>
            <div >
                <ul style={{ listStyleType: 'none', width: 1100 ,backgroundColor: '#000000ff', borderRadius: '8px' , border: '4px solid #93b9b2', margin: '0em', height: '3em', display:'flex', alignItems:'center'}}>
                <li>
                    <Link to="/Learnhtml">HTML</Link>
                </li>
                <li>
                    <Link to="/LearnCss">CSS</Link>
                </li>
                <li>
                    <Link to="/LearnJs">JavaScript</Link>
                </li>
                </ul>
            </div>
        </div>
    );
};

export default WebDevbar;