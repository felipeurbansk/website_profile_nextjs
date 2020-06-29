import moment from "moment";
import { FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";

const SectionFooter = () => (
  <footer className="content-footer">
    <div className="social">
      <ul>
        <li>
          <FiTwitter />
        </li>
        <li>
          <FiFacebook />
        </li>
        <li>
          <FiLinkedin />
        </li>
      </ul>
    </div>
    <hr className="divider-footer" />
    <small class="text-muted">
      Felipe Urbanski -{" "}
      <cite title="Source Title">{moment().format("YYYY")}</cite>
    </small>
  </footer>
);

export default SectionFooter;
