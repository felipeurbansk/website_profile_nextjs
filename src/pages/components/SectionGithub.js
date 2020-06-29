import { Card } from "react-bootstrap";
import { FiUsers } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import { GoRepo, GoRepoPull } from "react-icons/go";
import { DiPhp, DiJavascript1, DiNodejsSmall, DiHtml5 } from "react-icons/di";
import SimpleBar from "simplebar-react";

const languages = {
  php: <DiPhp size={30} />,
  javascript: <DiJavascript1 size={18} />,
  node: <DiNodejsSmall />,
  html: <DiHtml5 size={18} />,
};

const SectionGithub = ({ github, repos }) => (
  <section className="content-github">
    <a
      className="logo-link"
      href="https://github.com/felipeurbansk"
      target="_blank"
    >
      <AiFillGithub size={55} />
    </a>
    {github && repos && (
      <div className="section section-profile">
        <Card>
          <Card.Body>
            <Card.Title className="header-card">
              {github.name}
              <a href="https://github.com/felipeurbansk" target="_blank">
                <AiFillGithub className="icon-github" />
              </a>
            </Card.Title>
            <a href="https://github.com/felipeurbansk" target="_blank">
              <Card.Subtitle className="mb-2 text-muted">
                {`@${github.login}`}
              </Card.Subtitle>
            </a>
            <Card.Text className="text-infos"></Card.Text>
            <div className="box-follower">
              <div className="followers">
                <Card.Text>
                  <FiUsers className="icon" size={16} />
                  <span>
                    <span className="counter">{github.followers}</span>{" "}
                    seguidores
                  </span>
                  <BsFillCircleFill className="separator" size={5} />
                  <span>
                    <span className="counter">{github.following}</span> seguindo
                  </span>
                  <span className="repositories">
                    <GoRepo className="icon" />
                    <span className="counter">{github.public_repos}</span>
                  </span>
                </Card.Text>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    )}
    {repos && repos.length && (
      <div className="section section-repo">
        <h5>Repositórios</h5>
        <SimpleBar className="container-repos">
          {repos.map(
            (repo) =>
              repo && (
                <a href={repo.html_url} key={repo.id}>
                  <Card className="repository mb-2">
                    <Card.Body>
                      <div className="row row-repo">
                        <div className="header-card">
                          <div className="title">
                            <Card.Title>
                              {repo.name}
                              <GoRepoPull size={18} />
                            </Card.Title>
                            <Card.Subtitle className="description">
                              {repo.description}
                            </Card.Subtitle>
                            <Card.Subtitle className="languages">
                              {languages[String(repo.language).toLowerCase()]}
                            </Card.Subtitle>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </a>
              )
          )}
        </SimpleBar>
      </div>
    )}
  </section>
);

export default SectionGithub;
