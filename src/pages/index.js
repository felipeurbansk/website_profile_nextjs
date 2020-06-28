import Head from "next/head";
// import "isomorphic-fetch";
import NavBar from "./components/NavBar";
import SectionHome from "./components/SectionHome";
import SectionAbout from "./components/SectionAbout";
import SectionGithub from "./components/SectionGithub";

function Index({ github, repos }) {
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
        <SectionGithub github={github} repos={repos} />
        <section className="content-resume"></section>
        <section className="content-portfolio"></section>
        <section className="content-contatc"></section>
      </div>
    </div>
  );
}

Index.getInitialProps = async () => {
  const response_perfil = await fetch(
    "https://api.github.com/users/felipeurbansk"
  );

  const response_repo = await fetch(
    "https://api.github.com/users/felipeurbansk/repos?sort=updated"
  );

  const github = await response_perfil.json();
  const repos = await response_repo.json();

  return { github, repos };
};

export default Index;
