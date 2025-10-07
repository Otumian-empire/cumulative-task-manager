import { Link } from "react-router-dom";

export function Header() {
    return (
        <>
            <h1>Cumulative Task Manager</h1>
            <nav className="header-nav">
                <Link className="nav-link" to="/">
                    Home
                </Link>
                <Link className="nav-link" to="/goal-form">
                    New Goal
                </Link>
                {/* <Link className="nav-link" to="/goals/:id">
                View Goal
            </Link>
            <Link className="nav-link" to="/goals/:id/contribute">
                Contribute to Goal
            </Link> */}
            </nav>
        </>
    );
}
