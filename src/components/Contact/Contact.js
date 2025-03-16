import { contact } from '../../portfolio'
import { about } from '../../portfolio'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WorkIcon from '@mui/icons-material/Work';

import './Contact.css'

const Contact = () => {
  const { social, resume } = about

  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={resume} title='Go to resume' target="_blank" rel="noreferrer">
        <span type='button' className='btn btn--outline'>
          Resume
        </span>
      </a>

      <div className='contact-link-wrap'>
        <a href={`mailto:${contact.email}`} target="_blank" title='Send me an email' rel="noreferrer">
          <span type='button' className='btn btn--outline'>
            Email me
          </span>
        </a>
      </div>

      {social.github && (
        <div className='contact-link-wrap'>
          <span  className='contact-link__title'>My GitHub: </span> <a
            title='Go to GitHub'
            href={social.github}
            target="_blank" 
            rel="noreferrer"
            aria-label='github'
            className='link link--icon'
          >
            <GitHubIcon />
          </a>
        </div>
      )}

      {social.linkedin && (
        <div className='contact-link-wrap'>
          <span  className='contact-link__title'>My Linkedin: </span>
          <a
            title='Go to Linkedin'
            href={social.linkedin}
            target="_blank" 
            rel="noreferrer"
            aria-label='linkedin'
            className='link link--icon'
          >
            <LinkedInIcon />
          </a>
        </div>
      )}
      
      {social.upwork && (
        <div className='contact-link-wrap'>
          <span  className='contact-link__title'>My Upwork: </span>
          <a
            title='Go to Upwork'
            href={social.upwork}
            target="_blank" 
            rel="noreferrer"
            aria-label='upwork'
            className='link link--icon'
          >
            <WorkIcon />
          </a>
        </div>
      )}
    </section>
  )
}

export default Contact
