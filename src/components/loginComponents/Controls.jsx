import React, { useState } from 'react';


const Controls = () => {

    const [ name, setName ] = useState('')
    const [ placeHolder, setPlaceHolder ] = useState('your name')


    return (
        <div className='controlBox'>
            <input 
                type="text"
                placeholder={placeHolder}
                value={name} 
                onChange={ e => setName( e.target.value )}
            />
            <div className='controlsBox'>
                <div className='imgBox'>
                    <img src={`animated/normal/6.gif`} alt="" />
                    <span>nombre pokemon</span> 
                    <span className='pokeNumber'>001</span>
                </div>
            </div>
        </div>
    );
};

export default Controls;