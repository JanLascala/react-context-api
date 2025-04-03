import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="p-3">
                <nav className="navbar">
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        {/* Logo */}
                        <img
                            className="logo"
                            src="https://template.pro/wp-content/uploads/2015/09/2000px-MTV_Logo.svg_.png"
                            alt="Logo"
                        />

                        {/* Navigation Links */}
                        <div className="d-flex gap-2">
                            <NavLink to="/" className="btn btn-dark">
                                Home
                            </NavLink>
                            <NavLink to="/posts" className="btn btn-dark">
                                Posts
                            </NavLink>
                            <NavLink to="/about" className="btn btn-dark">
                                About Us
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    );
}