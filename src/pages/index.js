import SectionHome from "./components/SectionHome";
import SectionAbout from "./components/SectionAbout";
import SectionGithub from "./components/SectionGithub";
import SectionExperience from "./components/SectionExperience";
import SectionFooter from "./components/SectionFooter";

function Index({ github, repos }) {
  return (
    <>
      <main className="main">
        <div className="content-pages">
          <SectionHome />
          <SectionAbout />
          <SectionGithub github={github} repos={repos} />
          <SectionExperience />
        </div>
      </main>
      <SectionFooter />
    </>
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
