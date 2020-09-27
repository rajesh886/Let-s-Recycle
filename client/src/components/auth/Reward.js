import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Reward = props => {
    const [user, setUser] = useState({
        payeeID: '',
    });

    const { payeeID } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        props.history.push('/');
        fetch('http://api.reimaginebanking.com/accounts/1234/deposits/785490248d46ef4e2304385a1e053090', {
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify("submitted")
        }).then(function (response) {
            console.log(JSON.stringify(response))
            return response.json();
        });



    };

    return (
        <div className='form-container'>
            <h1>
                <span className='text-primary'>Enter your payeeID for deposit</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='payeeID'>payeeID</label>
                    <input
                        id='payeeID'
                        type='text'
                        name='payeeID'
                        value={payeeID}
                        onChange={onChange}
                        required
                    />
                </div>



                <input
                    type='submit'
                    value='Confirm Deposit'
                    className='btn btn-primary btn-block'
                />
            </form>
        </div>
    );
};

export default Reward;
