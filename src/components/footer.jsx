import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

function Footer(){

    return(

        <>
         <footer className="footer">
      <div className="redes-sociales">
        <a href="https://www.instagram.com/tu_cuenta_de_instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icono-instagram" />
        </a>
        <a href="https://www.facebook.com/tu_cuenta_de_facebook" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icono-facebook" />
        </a>
        <a href="https://www.twitter.com/tu_cuenta_de_twitter" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icono-twitter" />
        </a>
      </div>
      <p>&copy; 2023 Mi Sitio Web. Todos los derechos reservados.</p>
    </footer>
        
        </>
    )

}


export default Footer;