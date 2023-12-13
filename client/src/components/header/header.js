import React from 'react';

const Header = () => {
    const {isLoggedIn, login, logout} = useUserContext();

    return (
        <header>
            <nav>
                <ul>
                    <li>Home</li>
                    {isLoggedIn ? (
                        <>
                            <li>Create</li>
                            <li>Profile</li>
                            <li>Discover</li>
                            <li>Authors</li>
                            <li onClick={logout}>Logout</li>
                        </>
                    ) : (
                        <>
                            <li>Login</li>
                            <li>Register</li>
                            <li>About</li>
                            <li>Authors</li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};
export default Header;

