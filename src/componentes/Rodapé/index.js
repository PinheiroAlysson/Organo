import './rodape.css';

const Rodape = () => {
    return(<footer className='footer'>
        <section>
            <ul>
                <li>
                    <a href='facebook.com' target='_blank'>
                        <img src='/imagens/imagens/fb.png' alt='logo do facebook'/>
                    </a>
                </li>

                <li>
                    <a href='twitter.com' target='_blank'>
                        <img src='/imagens/imagens/tw.png' alt='logo do twitter'/>
                    </a>
                </li>

                <li>
                    <a href='instagram.com' target='_blank'>
                        <img src='/imagens/imagens/ig.png' alt='logo do instagram'/>
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src='imagens/imagens/logo.png' alt='logo organo'/>
        </section>
        <section>
            <p>Desenvolvido por Alysson Pinheiro.</p>
        </section>
    </footer>)
}

export default Rodape