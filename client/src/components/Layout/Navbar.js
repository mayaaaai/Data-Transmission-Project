function LoginRegister() {
    return (
        <><ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link active" href="/login">
                    Login
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="/register">
                    Register
                </a>
            </li>
        </ul></>
    )
}


function Logout() {

    function handleClick(e) {
        e.preventDefault();
        localStorage.removeItem("email");
        window.location.reload();
    }

    return (
        <><ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link active" href="/menu" onClick={handleClick}>
                    Logout
                </a>
            </li>
        </ul> </>
    )

}
function NavBarBody({ children }) {
    return (
        <><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Zoom's FineDine
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/menu">
                                Menu
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">
                                Cart
                            </a>
                        </li>
                    </ul>
                    {children}

                </div>
            </div>
        </nav>
        </>
    )
}



function Navbar() {

    if (localStorage.getItem("email") === null) {

        return (
            <NavBarBody>
                <LoginRegister />
            </NavBarBody>

        )

    }
    else {
        return (
            <NavBarBody>
                <Logout />
            </NavBarBody>

        )
    }


}

export default Navbar;