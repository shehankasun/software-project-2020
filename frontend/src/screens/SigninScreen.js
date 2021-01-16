import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  { useSelector, useDispatch } from 'react-redux';
import data from '../data';


function SigninScreen(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
   const dispatch = useDispatch();

    useEffect(() => {

        return () => {
            
        }
    }, []);
    const submitHandler = (e) =>{
        e.preventDefault();
    }
    return  <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Sign-In</h2>
                    <label for="email">
                        Email

                    </label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>

                    </input>
                </li>
                
                <li>
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)}>

                        </input>
                </li>
                
                <li>
                    <button type="submit" className="button primary">Signin</button>
                </li>
                <li>
                    New to GentsHouse?
                </li>
                <li>
                    <Link to="/register" className="button secondary text-center">Create your GentsHouse account here</Link>
                </li>

            </ul>
        </form>
    </div>
}
export default SigninScreen;