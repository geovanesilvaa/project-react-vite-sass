import "../styles/components/header.scss";

const Header = () => {
  return (
    <header className="headerContainer">
      <a href="#" className="sloganContainer">
        <i className="fa-brands fa-android"></i> <p>ANDROID</p>
      </a>

      <nav className="navContainer">
        <ul>
          <li>
            <a href="#">
              <i className="fa-sharp fa-solid fa-users"></i> Users
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fa-solid fa-house"></i> Home
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fa-solid fa-circle-info"></i> Info
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// <i class="fa-brands fa-android"></i>
// <i class="fa-sharp fa-solid fa-users"></i>
// <i class="fa-solid fa-circle-info"></i>
// <i className="fa-solid fa-house"></i>;
