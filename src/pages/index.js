import { useState } from "react";
import Head from "next/head";
import NavBar from "./components/NavBar";

function HomePage() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function visibleMenu() {
    setToggleMenu(true);
  }

  return (
    <div className="main">
      <Head>
        <title>Felipe Urbanski - Fullstack Developer</title>
      </Head>
      <NavBar />
      <div className="content-pages">
        {/* <Button>Teste</Button> */}
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
