import "./Header.css"

function Header(){
    return <header className="header-main">
        <nav className="nav-container">
            <img src="./img/logo.png"/>
            <div className="nav-button">
            <button className="button button-home">HOME</button>
            <button className="button button-video">NUEVO VIDEO</button>
            </div>
        </nav>
        {/* <div className="banner-main">
        <img src="/img/banner.png" alt="Banner"/>
        </div> */}
    </header>
}

export default Header