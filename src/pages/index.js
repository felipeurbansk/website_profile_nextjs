import SectionHome from "./components/SectionHome";
import SectionAbout from "./components/SectionAbout";
import SectionGithub from "./components/SectionGithub";
import SectionExperience from "./components/SectionExperience";
import SectionFooter from "./components/SectionFooter";
import SimpleBar from "simplebar-react";

function Index({ github, repos }) {
  return (
    <>
      <main className="main">
        <div className="content-pages">
          <SectionHome />
          <SectionGithub github={github} repos={repos} />
          <SectionAbout />
          <SectionExperience />
        </div>
      </main>
      <SectionFooter />
    </>
  );
}

Index.getInitialProps = async () => {
  const response_perfil = await fetch(
    "https://api.github.com/users/felipeurbansk",
    {
      authorization: "34b2ca24cc6239b01faa7ca1ea51f6ca711e159e",
    }
  );

  const response_repo = await fetch(
    "https://api.github.com/users/felipeurbansk/repos?sort=updated",
    { authorization: "34b2ca24cc6239b01faa7ca1ea51f6ca711e159e" }
  );

  const github = await response_perfil.json();
  const repos = await response_repo.json();

  return { github, repos };
};

export default Index;
