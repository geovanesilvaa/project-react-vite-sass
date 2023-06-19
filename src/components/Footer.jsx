import "../styles/components/footer.scss";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div>
        <ul>
          <li>
            <a href="#">
              <i className="fa-brands fa-linkedin"></i> Linkedin
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fa-brands fa-square-instagram"></i> Instagram
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fa-brands fa-square-github"></i> Github
            </a>
          </li>
        </ul>
      </div>

      <div>
        <p>© 2023 Minha Aplicação. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
