import moment from "moment";
import SocialBar from "./SocialBar";

const SectionFooter = () => (
  <footer className="content-footer">
    <SocialBar />
    <small className="text-white">
      Felipe Urbanski -{" "}
      <cite title="Source Title">{moment().format("YYYY")}</cite>
    </small>
  </footer>
);

export default SectionFooter;
