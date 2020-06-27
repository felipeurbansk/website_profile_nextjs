import { FiInfo, FiHeadphones, FiCoffee, FiCode, FiCpu } from "react-icons/fi";
import { FaDog } from "react-icons/fa";
import { GiGamepad } from "react-icons/gi";

const SectionAbout = () => (
  <section className="content-about">
    <h3>About me</h3>
    {/* <FiInfo size={25} /> */}
    {/* <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p> */}
    <div className="group-columns">
      <div className="colum contact">
        <h4>Meus Contatos</h4>
        <table className="table-contact">
          <tbody>
            <tr>
              <th>Nascimento:</th>
              <td>19/10/1993</td>
            </tr>
            <tr>
              <th>Phone:</th>
              <td>(41) 98508-1756</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>felipeurbansk@gmail.com</td>
            </tr>
            <tr>
              <th>Residencia:</th>
              <td>Curitiba, PR</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="colum my-interest">
        <div className="frame-interest">
          <GiGamepad />
          <span>Games</span>
        </div>
        <div className="frame-interest">
          <FiHeadphones />
          <span>Musica</span>
        </div>
        <div className="frame-interest">
          <FiCoffee />
          <span>Coffe</span>
        </div>
        <div className="frame-interest">
          <FiCode />
          <span>Code</span>
        </div>
        <div className="frame-interest">
          <FiCpu />
          <span>Technology</span>
        </div>
        <div className="frame-interest">
          <FaDog />
          <span>Animals</span>
        </div>
      </div>
    </div>
  </section>
);

export default SectionAbout;
