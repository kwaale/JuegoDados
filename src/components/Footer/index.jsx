
import './Footer.css';
import gitHub from '../../img/gitHub.png';


export default function Footer() {
    return (
        <footer className='footer-container'>
            <p>Dados para usar con tus juegos favoritos.</p>
            <div className='logo-right'>
                <a href='https://github.com/kwaale'>
                    <img className='img-github' src={gitHub} alt='gitHub-kwaale' />
                </a>
                <cite>Ⓒ Knut Waale | 2021</cite>
            </div>
        </footer>
    )
}