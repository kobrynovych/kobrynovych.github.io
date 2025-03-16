import { about } from '../../portfolio'
import './Footer.css'

const Footer = () => {
  const { name, social } = about

  let date = (new Date().getFullYear())
  return (
          <footer className='footer'>
          <a
            href={social.github}
            target="_blank" 
            rel="noreferrer"
            className='link footer__link'
            >
            Created By {name}
          </a>
          <p>Copyright © {date}</p>
        </footer>
      )
}

export default Footer
