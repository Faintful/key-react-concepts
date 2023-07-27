import "./Header.css";

const Header = ({ title, image, description }) => 
  <header className="header">
    <img className="header img" src={image.src} alt={image.alt} />
    <h1 className="header h1">{title}</h1>
    <p className="header p">{description}</p>
  </header>;
;

export default Header;
