import { Link, useNavigate } from 'react-router-dom'
import styles from '../CSS/Login.module.css'
import { useEffect, useState } from 'react'
import Home from '../Home';
export default function Login() {

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [users, setUsers] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3000/user")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setUsers(data)
            });
    }, [])



    const handleLogin = (e) => {
        e.preventDefault();
        const user = users.find((u) => u.email == email && u.password == pwd)

        console.log(user.name)
        if (user) {
            alert("Login Success")
            const currentUser = {
                name: user.name
            }
            fetch("http://localhost:3000/currentUser", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(currentUser)
            })
            navigate('/');
        }
        else {
            alert("Invalid Eamil or Password")
        }
    }

    return (
        <>
            <div className="container">
                { }
                {/* {console.log(users)} */}
                <div className={`${styles.login} shadow`}>

                    <h3 className="text-center mb-4">Login</h3>

                    <form>
                        <div className="mb-3">
                            <label>Email</label>
                            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="mb-3">
                            <label>Password</label>
                            <input type="password" value={pwd} onChange={(event) => setPwd(event.target.value)} className="form-control" placeholder="Enter password" />
                        </div>

                        <button className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
                    </form>

                    <p className="text-center mt-3">
                        Don't have an account?

                        <Link to='/sigin' >Sign Up</Link>
                    </p>

                </div>
            </div>
        </>
    )
}