import { FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";

const SectionHome = () => (
  <section className="content-home">
    <div className="bg-home responsive"></div>
    <div className="primary-infos">
      <div className="rounded-circle photo">
        <img
          className="rounded-circle"
          src="/img/perfil.webp"
          alt="Minha foto."
        />
      </div>
      <div className="container-card">
        <h1 className="fullname">Felipe Urbanski</h1>
        <p className="subtitle">Fullstack Developer</p>
        <div className="social">
          <ul>
            <li>
              <FiTwitter />
            </li>
            <li>
              <FiFacebook />
            </li>
            <li>
              <FiLinkedin />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default SectionHome;
