import React, { useEffect, useState } from 'react';

const WelcomeMessage = () => {

    const [text, setText] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setText('Hello trainer!!! Give me your name to start.'.slice(0, text.length + 1))
        }, 50)
    }, [text]);

    return (
        <div className='welcomeMessageBox'>
            { text }
            
        </div>
    );
};

export default WelcomeMessage;