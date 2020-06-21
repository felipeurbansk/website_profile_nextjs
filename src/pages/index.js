import Link from "next/link";
import Head from "next/head";

function HomePage() {
  return (
    <div className="main">
      <Head>
        <title>Felipe Urbanski - Fullstack Developer</title>
        <div className="nav-bar">
          <img src="/logo.png" alt="Logo" width="50" height="50" />
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a>HOME</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>ABOUT</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>SKILLS</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>RESUME</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>PORTFOLIO</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>CONTACT</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Head>
      <div className="content-pages">
        <section className="content-home"></section>
        <section className="content-about"></section>
        <section className="content-skills"></section>
        <section className="content-resume"></section>
        <section className="content-portfolio"></section>
        <section className="content-contatc"></section>
      </div>
    </div>
  );
}

export default HomePage;
