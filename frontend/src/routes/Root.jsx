import { Outlet, Link } from 'react-router-dom';

const Root = () => {
    return (
        <>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to={`/home`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`/about`}>About</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Root;
