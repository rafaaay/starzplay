function Header() {
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
                    <button aria-label="search" aria-disabled="false" aria-pressed="false">
                        <img src={'/static/icons/icon_search.svg'} />
                    </button>

                    <div className="results"></div>
                </div>

                <div className="header__options">
                    <button aria-label="options" aria-disabled="false" aria-pressed="false">
                        <img src={'/static/icons/icon_settings.svg'} />
                        <img src={'/static/icons/icon_caret-down.svg'} />
                    </button>
                </div>
            </div>
            {/* Header Options */}
        </header>
    )
}

export default Header
