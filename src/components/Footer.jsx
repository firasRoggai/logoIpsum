import logo from '../assets/img/icons/logo.svg'

const col = ["lorem impsum", "lorem impsum", "lorem impsum", "lorem impsum"]

const footerLinks = () => {
    return (
        <ul className="footer__links">
            <li className='footer__header-link'>Something</li>
            {col.map(item => {
                return (
                    <li className='footer__link'><a href="#">{item}</a></li>
                )
            })}
        </ul>
    )
}

const Footer = () => {
    return (
        <footer>
            <div className="footer__logo-container">
                <img src={logo} alt="" className="logo" />
            </div>
            <div className="footer__links-container">
                {footerLinks()}
                {footerLinks()}
                {footerLinks()}
                <div style={{display : "none"}}>
                {footerLinks()}
                </div>
            </div>
        </footer>
    );
}

export default Footer;