function Footer() {
    return (
        <footer className="footer">
            {/* Links */}
            <ul className="footer__links">
                <li><a href="#">Why <span>Starzplay</span></a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Partner with us</a></li>
                <li><a href="#">Company</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
            </ul>
            {/* Links */}

            {/* Copyright */}
            <div>
                <p>Copyright @ 2021 STARZPLAY. All rights reserved.</p>
            </div>
            {/* Copyright */}

            {/* Social Links */}
            <div className="footer__social-links">
                <a><img src={'/static/icons/icon_facebook.svg'} alt="facebook" /></a>
                <a><img src={'/static/icons/icon_twitter.svg'} alt="twitter" /></a>
                <a><img src={'/static/icons/icon_instagram.svg'} alt="instagram" /></a>
                <a><img src={'/static/icons/icon_youtube.svg'} alt="youtube" /></a>
            </div>
            {/* Social Links */}
        </footer>
    )
}

export default Footer
