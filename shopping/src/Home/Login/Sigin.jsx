import { useState } from 'react';
import Sigi from '../CSS/Sigin.module.css';
import { Link } from 'react-router-dom';
export default function Sigin() {

    const [name, setName] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [pwd1, setPwd1] = useState("");
    const [pwd2, setPwd2] = useState('');
    const [samepwd, setSamepwd] = useState('');
    const [same, setSame] = useState(true)

    function changePwd1(event) {
        setPwd1(event.target.value);
        console.log(event.target.value);
    }

    function changePwd2(event) {
        setPwd2(event.target.value);
        console.log(event.target.value);

        if (pwd1 == event.target.value) {
            setSame(true);
            setSamepwd(pwd1);
        }
        else {
            setSame(false);
        }
    }

    const handlesubmit = () => {

        const userData = {
            name: name,
            email: email,
            password: samepwd
        }

        fetch("http://localhost:3000/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });
        alert("User Registered!")
    } ;

    return (
        <>
            <div className="container">
                <div className={`${Sigi.signup} shadow `}>

                    <h3 className="text-center mb-4">Create Account</h3>

                    <form>
                        <div className="mb-3">
                            <label>Full Name</label>
                            <input type="text" value={name} onChange={() => setName(event.target.value)} className="form-control" placeholder="Enter name" />
                        </div>

                        <div className="mb-3">
                            <label>Email</label>
                            <input type="email" value={email} onChange={() => setEmail(event.target.value)} className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="mb-3">
                            <label>Password</label>
                            <input type="password" value={pwd1} onChange={() => changePwd1(event)} className="form-control" placeholder="Create password" />
                        </div>

                        <div className="mb-3">
                            <label>Confirm Password</label>
                            <input type="password" value={pwd2} onChange={() => changePwd2(event)} className="form-control" placeholder="Confirm password" />
                            {!same && <p>Password did not match</p>}
                        </div>

                        <button className="btn btn-success w-100" onClick={handlesubmit}>Sign Up</button>
                    </form>

                    <p className="text-center mt-3">
                        Already have an account?

                        <Link to='/login' >Login</Link>
                    </p>

                </div>
            </div>
        </>
    )
}