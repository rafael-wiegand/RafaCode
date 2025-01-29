import "./servicos.css"
import SuporteTecnico from "../Image/suporte-tecnico.jpg"
import DesingSites from "../Image/Design-de-Sites.jpg"
import ConsultoriaTi from "../Image/Consultoria-de-Ti.jpg"
import SeoOptimization from "../Image/search-engine-optimization.jpg"

function SectionServicos() {
  return (
    <section className="servicos-section" id="servicos">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Serviços</h2>
          </div>
        </div>
      </div>

      <div className="container-servico row">
        <div className="servicos">
            <div className="logo">
                <img src={SuporteTecnico} alt="Ícone representando JavaScript"title="Suporte técnico" />
            </div>
                <h3>Suporte Técnico</h3>
                <p>Suporte contínuo para resolver problemas técnicos e garantir o bom funcionamento dos sistemas.</p>
            </div>

        <div className="servicos">
            <div className="logo">
                <img src={DesingSites} alt="Ícone representando HTML5" title="Desing de sites"/>
            </div>
                <h3>Design de Sites</h3>
                <p>Criação de sites personalizados e responsivos para sua empresa ou projeto.</p>
            </div>

        <div className="servicos">
            <div className="logo">
                <img src={SeoOptimization} alt="Ícone representando CSS3" title="Otimizando mecanismos"/>
            </div>
                <h3>SEO (Otimização para Mecanismos de Busca)</h3>
                <p>Melhorias para garantir que seu site tenha um bom posicionamento no Google.</p>
        </div>

        <div className="servicos">
          <div className="logo">
            <img src={ConsultoriaTi} alt="Ícone representando GitHub" title="Consultoria de TI"/>
          </div>
            <h3>Consultoria de TI</h3>
            <p>Ajudamos sua empresa a otimizar o uso de tecnologia para melhorar processos e resultados.</p>
        </div>
      </div>
    </section>
  );
}

export default SectionServicos;
