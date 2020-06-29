import { FiHeadphones, FiCoffee, FiCode, FiCpu } from "react-icons/fi";
import { MdMovie } from "react-icons/md";
import { GiGamepad } from "react-icons/gi";
import {
  DiPhp,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiBootstrap,
  DiGithubBadge,
  DiLaravel,
  DiNpm,
  DiComposer,
  DiWordpress,
} from "react-icons/di";

const SectionAbout = () => (
  <section className="content-about">
    <div className="group-columns">
      <fieldset>
        <legend>Experiencia</legend>
        <div className="colum experiences">
          <div className="frame-icon php">
            <DiPhp />
            <span>PHP</span>
          </div>
          <div className="frame-icon">
            <DiLaravel />
            <span>Laravel</span>
          </div>
          <div className="frame-icon">
            <DiHtml5 />
            <span>HTML5</span>
          </div>
          <div className="frame-icon">
            <DiCss3 />
            <span>CSS3</span>
          </div>
          <div className="frame-icon">
            <DiJavascript1 />
            <span>Javascript</span>
          </div>
          <div className="frame-icon">
            <DiWordpress />
            <span>Wordpress</span>
          </div>
          <div className="frame-icon">
            <DiNodejsSmall />
            <span>Node</span>
          </div>
          <div className="frame-icon">
            <DiReact />
            <span>React</span>
          </div>
          <div className="frame-icon">
            <DiBootstrap />
            <span>Bootstrap</span>
          </div>
          <div className="frame-icon">
            <DiGithubBadge />
            <span>Github</span>
          </div>
          <div className="frame-icon">
            <DiNpm />
            <span>NPM</span>
          </div>
          <div className="frame-icon">
            <DiComposer />
            <span>Composer</span>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Interesses</legend>
        <div className="colum my-interest">
          {/* <legend className="title-columns">Interest</legend> */}
          <div className="frame-icon">
            <GiGamepad />
            <span>Games</span>
          </div>
          <div className="frame-icon">
            <FiHeadphones />
            <span>Musica</span>
          </div>
          <div className="frame-icon">
            <FiCoffee />
            <span>Café</span>
          </div>
          <div className="frame-icon">
            <FiCode />
            <span>Code</span>
          </div>
          <div className="frame-icon">
            <FiCpu />
            <span>Tecnologia</span>
          </div>
          <div className="frame-icon">
            <MdMovie />
            <span>Filme/Serie</span>
          </div>
        </div>
      </fieldset>
    </div>
  </section>
);

export default SectionAbout;
