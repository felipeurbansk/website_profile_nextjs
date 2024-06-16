import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

const SocialBar = () => (
  <div className="social">
    <ul>
      <a href="https://www.linkedin.com/in/felipeurbansk/" target="_blank">
        <li>
          <FiLinkedin />
        </li>
      </a>
      <a href="https://github.com/felipeurbansk/" target="_blank">
        <li>
          <AiFillGithub />
        </li>
      </a>
      <a href="https://www.facebook.com/felipeurbansk/" target="_blank">
        <li>
          <FiFacebook />
        </li>
      </a>
      <a href="https://www.instagram.com/felipeurbansk/" target="_blank">
        <li>
          <FiInstagram />
        </li>
      </a>
    </ul>
  </div>
);

export default SocialBar;
