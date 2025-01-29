import './header.css';

function HeaderComponent() {
    return (
        <header className='header-container'>
            <div className='logo'>
                <h1>RafaCode</h1>
            </div>
            <nav>
                <input id="menu-celular" type="checkbox" />
                <label htmlFor="menu-celular">
                    <div className="menu">
                        <span className="icone"></span>
                    </div>
                </label>
                <ul className='informacoes'>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderComponent;
