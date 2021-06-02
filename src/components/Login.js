import React, {useRef, useState} from 'react';
import '../components/style.css';
import Illustration from '../images/illustration/login.svg';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('./')

        } catch {
            setError('Failed to sign in')
        }
        setLoading(false)
    }

    return (
        <>
            <div className="grid grid-cols-2 gap-4 justify-items-center">
                <div className="text-black text-center mx:auto p-10">
                    <h1 className="mt-16 text-5xl font-bold pb-6">Sign In</h1>
                    <form onSubmit={handleSubmit} className="space-y-6 mx:auto w-96" action="#" method="POST">
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="rounded-md shadow-sm">
                                <div>
                                <label htmlFor="email" className="sr-only">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                    ref={emailRef}
                                />
                                </div>
                                <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="currentPassword"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                    ref={passwordRef}
                                />
                                
                                </div>
                            </div>
                            {error && <div className="text-red-500">{error}</div>}
                            <div className="text-sm">
                                Need an account?&nbsp;
                                <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Signup
                                </Link>
                                </div>

                            <div>
                                <button
                                type="submit"
                                disabled={loading}
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                </span>
                                Log In
                                </button>
                            </div>
        </form>
                </div>
                <div>
                    <img src={Illustration} alt="register" className="h-5/6 mt-10 pr-36"/>
                </div>
            </div>
        </>
    )
}

