import Head from "next/head";
// import "isomorphic-fetch";
import SectionHome from "./components/SectionHome";
import SectionAbout from "./components/SectionAbout";
import SectionGithub from "./components/SectionGithub";

function Index({ github, repos }) {
  return (
    <main className="main">
      <div className="content-pages">
        <SectionHome />
        <SectionAbout />
        <SectionGithub github={github} repos={repos} />
        <section className="content-resume"></section>
        <section className="content-portfolio"></section>
        <section className="content-contatc"></section>
      </div>
    </main>
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
