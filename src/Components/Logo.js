import React from 'react'
import { useHistory } from 'react-router-dom';

function Logo() {
    const history = useHistory()

    return (
        <div id='nav-logo'>
            <img
                onClick={() => history.push('/')}
                className='logo'
                src='https://kunruh.de/images/profilepic.jpg'
                alt='Home'
            />
        </div>
    )
}

export default Logo