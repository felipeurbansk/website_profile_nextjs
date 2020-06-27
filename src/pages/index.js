import Head from "next/head";
import NavBar from "./components/NavBar";
import SectionHome from "./components/SectionHome";
import SectionAbout from "./components/SectionAbout";
import SectionGithub from "./components/SectionGithub";

function Index() {
  return (
    <div className="main">
      <Head>
        <title>Felipe Urbanski - Fullstack Developer</title>
        <NavBar />
      </Head>
      <div className="content-pages">
        {/* <Button>Teste</Button> */}
        <SectionHome />
        <SectionAbout />
        <SectionGithub />
        <section className="content-resume"></section>
        <section className="content-portfolio"></section>
        <section className="content-contatc"></section>
      </div>
    </div>
  );
}

export default Index;
