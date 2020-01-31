import React from 'react';

const SignOut = props => {
    const handleClick = e => {
        localStorage.removeItem('token');
        props.history.push('/signin');
    }
    return (
        <div className='sign-out-page'>
            <h2>Are you sure you to sign out?</h2>
            <button onClick={handleClick}>Sign Out</button>
        </div>
    )
}

export default SignOut;