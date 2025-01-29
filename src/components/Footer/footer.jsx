import "./footer.css"

function FooterComponent() {
    return (
        <footer className="footer" id="contato">
            <div className="container">
                <h2>Fale com a Equipe</h2>
                <div className="redes-sociais">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rafael-wiegand-87777b268/" className="outer-shadow">
                        <i className="fab fa-linkedin-in"></i>
                    </a>

                    <a target="_blank" rel="noreferrer" href="https://wa.me/5511998765432" className="outer-shadow">
                        <i className="fab fa-whatsapp"></i>
                    </a>

                    <a target="_blank" rel="noreferrer" href="https://github.com/rafael-wiegand" className="outer-shadow">
                            <i className="fab fa-github"></i>
                    </a>

                    <a target="_blank" rel="noreferrer" href="mailto:rafaelwiegand@hotmail.com" className="outer-shadow">
                        <i className="fas fa-envelope"></i> 
                    </a>

                </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.391789058805!2d-46.65113978447576!3d-23.562443284682567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59f1f9143bbf%3A0x1bfa890b1e564c8!2sRua%20Exemplo%2C%20123%2C%20Bairro%2C%20Cidade%2C%20Estado%2C%20Pa%C3%ADs!5e0!3m2!1spt-BR!2sbr!4v1603132524443!5m2!1spt-BR!2sbr"
                        width="600"
                        height="450"
                        frameborder="0"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                        title="Mapa interativo de localização"
                    />

            </div>
        </footer>
    )
}

export default FooterComponent
