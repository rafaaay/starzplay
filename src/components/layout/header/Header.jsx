import { useState } from "react"

function Header() {

    const [openSettings, setOpenSettings] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);

    return (
        <header className="header">
            {/* Header Content */}
            <div className="header__links">
                <h1 className="logo">
                    <a href="#"><span>starz</span>play</a>
                </h1>

                <nav className="nav">
                    <a href="#" className="nav__link active">movies</a>
                    <a href="#" className="nav__link">tv shows</a>
                    <a href="#" className="nav__link">arabic</a>
                    <a href="#" className="nav__link">kids channels</a>
                </nav>
            </div>
            {/* Header Content */}

            {/* Header Options */}
            <div className="header__controls">
                <div className="header__search">
                    <button onClick={() => setOpenSearch((prev) => !prev)} aria-label="search" aria-disabled="false" aria-pressed="false">
                        <img src={'/static/icons/icon_search.svg'} />
                    </button>

                    {
                        openSearch && 
                        <div className="search">
                            <input className="search__input" type="text" name="search" id="search" placeholder="Search" aria-labelledby="search movies or tv series" />

                            <div className="search__results"></div>
                        </div>
                    }
                </div>

                <div className="header__options">
                    <button onClick={() => setOpenSettings((prev) => !prev)} aria-label="options" aria-disabled="false" aria-pressed="false">
                        <img src={'/static/icons/icon_settings.svg'} className="wheel" />
                        <img src={'/static/icons/icon_caret-down.svg'} />
                    </button>

                    {
                        openSettings && 
                        <ul className="dropdown">
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Favorites</a></li>
                            <li><a href="#">Logout</a></li>
                        </ul>
                    }
                </div>
            </div>
            {/* Header Options */}
        </header>
    )
}

export default Header
