import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

const Jokes = props => {
    const [jokes, setJokes] = useState(null);

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:3300/api/jokes')
            .then(response => {
                console.log(response);
                setJokes(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div className='users-page'>
            {!jokes && <h2>Sign up or log on to see dad jokes</h2>}
            <div className='users-box'>
                {jokes && jokes.map(joke => {
                    return (
                        <div className='user-box' key={joke.id}>
                            <h2>{joke.joke}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Jokes;