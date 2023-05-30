import "./Header.css"

function Header() {

    let casita = "Home";

    return (
        <header>
            <nav>
                <ul className="list">
                    <li>{casita + " Holaaaaa"}</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            {console.log("Hola deesde Header")}
        </header>
    )

}

export default Header;