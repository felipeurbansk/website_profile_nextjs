import Head from "next/head";
import NavBar from "./components/NavBar";

import { FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";

function Index() {
  return (
    <div className="main">
      <Head>
        <title>Felipe Urbanski - Fullstack Developer</title>
        <NavBar />
      </Head>
      <div className="content-pages">
        {/* <Button>Teste</Button> */}
        <section className="content-home">
          <div className="bg-home responsive"></div>
          <div className="primary-infos">
            <div className="rounded-circle photo">
              <img
                className="rounded-circle"
                src="/img/perfil.jpg"
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
        <section className="content-about"></section>
        <section className="content-skills"></section>
        <section className="content-resume"></section>
        <section className="content-portfolio"></section>
        <section className="content-contatc"></section>
      </div>
    </div>
  );
}

export default Index;
