import { Timeline, TimelineEvent } from "react-event-timeline";
import { GiWhiteBook, GiComputerFan, GiUpgrade } from "react-icons/gi";
import { IoMdSchool } from "react-icons/io";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BsCodeSlash } from "react-icons/bs";
import { MdUpdate } from "react-icons/md";
import moment from "moment";

const SectionExperience = () => (
  <section className="content-experience">
    <h3 className="title">Timeline</h3>
    <Timeline lineColor="#777" className="container-timeline">
      <TimelineEvent
        title="Sistemas de Informação - FAFIT"
        createdAt="02/2015"
        lineColor="#FFF"
        iconStyle={{ color: "#FFF" }}
        bubbleStyle={{ backgroundColor: "#2d2727" }}
        className="content-timeline"
        icon={<GiWhiteBook size={20} />}
      >
        Inicio da graduação em sistemas de informação pela{" "}
        <a href="https://faculdadefafit.edu.br/">
          FAFIT - Faculdades Integradas de Itararé.
        </a>
        <hr className="divider" />
      </TimelineEvent>
      <TimelineEvent
        title="Auxiliar de Sistemas - Transpen"
        createdAt="06/2016"
        iconStyle={{ color: "#FFF" }}
        bubbleStyle={{ backgroundColor: "#2d2727" }}
        className="content-timeline"
        icon={<GiComputerFan size={20} />}
      >
        <p>
          Inicio das minhas atividades na empresa{" "}
          <a href="https://www.transpen.com.br/">Transpen</a>, uma empresa de
          transporte de carga e passageiro que atua fortemente nos estados de
          São Paulo e Paraná.{" "}
        </p>
        <p>
          São mais de 200 pontos de venda, garagens e filiais espalhadas pelo
          estados.
        </p>
        <p className="title-ul">Principais atividades</p>
        <ul>
          <li>Firewall</li>
          <li>Manutenção de computadores</li>
          <li>Manutenção de redes</li>
          <li>Manutenção de servidores Windows / Linux</li>
          <li>Monitoração de disponibilidade de rede e serviços</li>
          <li>Suporte ERP / Sistemas</li>
          <li>Suporte remoto / presencial</li>
        </ul>
        <hr className="divider" />
      </TimelineEvent>
      <TimelineEvent
        title="Analista de Sistemas - Transpen"
        createdAt="1/2018"
        iconStyle={{ color: "#FFF" }}
        bubbleStyle={{ backgroundColor: "#2d2727" }}
        className="content-timeline"
        icon={<GiUpgrade size={20} />}
      >
        <hr className="divider" />
      </TimelineEvent>
      <TimelineEvent
        title="Conclusão Sistemas de Informação - FAFIT"
        createdAt="12/2018"
        iconStyle={{ color: "#FFF" }}
        bubbleStyle={{ backgroundColor: "#2d2727" }}
        className="content-timeline"
        icon={<IoMdSchool size={20} />}
      >
        <p>
          Projeto de conclusão de curso teve como objetivo o desenvolvimento de
          um sistema de votação baseado em blockchain como uma alternativa para
          urna eletrônica.
        </p>
        <p>
          Para isso foi criado smart contract desenvolvido em{" "}
          <a href="https://solidity.readthedocs.io/" target="_blank">
            Solidity
          </a>
          , e executado em um blockchain privado utilizando a estrutura que o{" "}
          <a href="https://ethdocs.org/" target="_blank">
            Ethereum
          </a>{" "}
          oferece.
        </p>
        <p>
          Github:{" "}
          <a
            href="https://github.com/felipeurbansk/blockchain_smart_contract_vote"
            target="_blank"
          >
            felipeurbansk/blockchain_smart_contract_vote
          </a>
        </p>
        <hr className="divider" />
      </TimelineEvent>
      <TimelineEvent
        title="Fim das atividades - Transpen"
        createdAt="03/2019"
        iconStyle={{ color: "#FFF" }}
        bubbleStyle={{ backgroundColor: "#2d2727" }}
        className="content-timeline"
        icon={<RiLogoutBoxRLine size={20} />}
      >
        <hr className="divider" />
      </TimelineEvent>
      <TimelineEvent
        title="Desenvolvedor web Jr - WebmaniaBR"
        createdAt="04/2019"
        iconStyle={{ color: "#FFF" }}
        bubbleStyle={{ backgroundColor: "#2d2727" }}
        className="content-timeline"
        icon={<BsCodeSlash size={20} />}
      >
        <p>
          <a href="https://webmaniabr.com">WebmaniaBR</a>, uma startup focado no
          ramo tributário que oferece um sistema completo para emissão de nota
          fiscal.
        </p>
        <p>
          São mais de 1000 empresas que utilizam o sistema web ou API REST
          diariamente, com uma média de 8 mil emissões de notas por dia e
          contabilizando uma base de dados com mais de 6 milhões de notas já
          processadas.
        </p>
        <p className="title-ul">Principais atividades</p>
        <ul>
          <li>Atualização de dados MySQL</li>
          <li>Correção de bugs</li>
          <li>Desenvolvimento de novas features</li>
          <li>Github</li>
          <li>Implementação de novas ferramentas</li>
          <li>PHP</li>
          <li>SCRUM</li>
          <li>Suporte ao cliente</li>
        </ul>
        <hr className="divider" />
      </TimelineEvent>
      <TimelineEvent
        title="Atualizando..."
        createdAt={moment().format("MM/YYYY")}
        iconStyle={{ color: "#FFF" }}
        bubbleStyle={{ backgroundColor: "#2d2727" }}
        className="content-timeline"
        icon={<MdUpdate size={20} />}
      ></TimelineEvent>
    </Timeline>
  </section>
);

export default SectionExperience;
