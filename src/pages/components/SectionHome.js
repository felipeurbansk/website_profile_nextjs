import SocialBar from "./SocialBar";

const SectionHome = ({ github }) => (
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
        <SocialBar />
      </div>
    </div>
  </section>
);

export default SectionHome;
