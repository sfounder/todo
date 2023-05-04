import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
        <div className = 'container text-center'>
            <h1>Welcome to out app!</h1>
            <nav>
                <ul className = 'nav'>
                    <li><Link to = '/todo'>Go to TODO app</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
