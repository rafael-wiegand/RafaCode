import "./sobre.css"
import sobrenos from '../Image/sobre-nos.jpg';


function SobreComponent(){
    return(
        <section className="section-container" id="sobre">
            <div className="container-sobre">
                    <div class="row title">
                        <div class="sobre-nos">
                            <h2>Sobre nós</h2> 
                        </div>
                    </div>
                <div className="content-box">
                    <div className="img-box">
                        <div className="img-box-inner-shadow">
                            <img src={sobrenos} alt="sobre-nos" title="Trabalho em equipe" />
                        </div>
                    </div>
                        <div className="text-sobre-nos">
                            <p>
                            somos uma empresa dedicada ao desenvolvimento de soluções inovadoras em engenharia de software, com foco em otimizar processos e oferecer ferramentas personalizadas para nossos clientes. Nossa equipe qualificada busca sempre as melhores práticas e inovações do mercado, garantindo resultados concretos e alinhados com as necessidades e metas empresariais. Priorizamos a colaboração e o entendimento profundo dos desafios dos nossos clientes, para oferecer soluções eficazes e duradouras..</p>
                        </div>
                </div>
            </div>  
        </section>
    )
}
export default SobreComponent



