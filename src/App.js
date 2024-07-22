import React, { useState } from 'react';
import './App.css';
import StudentGradeCalculator from './StudentGradeCalculator';
import Login from './Login';
import SignUp from './SignUp';

function App() {
    const [user, setUser] = useState(null);
    const [isSignUp, setIsSignUp] = useState(false);

    const handleLogin = (email) => {
        setUser(email);
    };

    const handleSignUp = (email) => {
        setUser(email);
    };

    const handleLogout = () => {
        setUser(null);
    };

    return (
        <div className="App">
            <header className="App-header">
                {user ? (
                    <>
                        <button onClick={handleLogout}>Logout</button>
                        <StudentGradeCalculator />
                    </>
                ) : (
                    <div className="auth-wrapper">
                        {isSignUp ? (
                            <SignUp onSignUp={handleSignUp} />
                        ) : (
                            <Login onLogin={handleLogin} />
                        )}
                        <button className="toggle-auth-button" onClick={() => setIsSignUp(!isSignUp)}>
                            {isSignUp ? 'Go to Login' : 'Go to Sign Up'}
                        </button>
                    </div>
                )}
            </header>
        </div>
    );
}

export default App;
