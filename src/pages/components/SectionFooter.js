import moment from "moment";
import { FiTwitter, FiFacebook, FiLinkedin, FiGithub } from "react-icons/fi";

const SectionFooter = () => (
  <footer className="content-footer">
    <div className="social">
      <ul>
        <li>
          <FiGithub />
        </li>
        <li>
          <FiLinkedin />
        </li>
        <li>
          <FiFacebook />
        </li>
        <li>
          <FiTwitter />
        </li>
      </ul>
    </div>
    <hr className="divider-footer" />
    <small class="text-white">
      Felipe Urbanski -{" "}
      <cite title="Source Title">{moment().format("YYYY")}</cite>
    </small>
  </footer>
);

export default SectionFooter;
