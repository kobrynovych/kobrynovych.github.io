import { skillsProgram, skillsProgramBE, skillsFrameworks, skillsDatabase, skillsOther, skillsLanguages, skillsPersonal } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  // if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <h4 className='skills__list-title'>PROGRAMMING</h4>
      <h4 className='skills__list-title'>Frontend</h4>
      <ul className='skills__list'>
        {skillsProgram.map((skill, index) => (
          <li key={index} className='skills__list-item btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
      <h4 className='skills__list-title'>CSS FRAMEWORKS and Libraries</h4>
      <ul className='skills__list'>
        {skillsFrameworks.map((skill, index) => (
          <li key={index} className='skills__list-item btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
      <h4 className='skills__list-title'>Backend</h4>
      <ul className='skills__list'>
        {skillsProgramBE.map((skill, index) => (
          <li key={index} className='skills__list-item btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
      <h4 className='skills__list-title'>Database Technology</h4>
      <ul className='skills__list'>
        {skillsDatabase.map((skill, index) => (
          <li key={index} className='skills__list-item btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
      <h4 className='skills__list-title'>OTHER SKILLS</h4>
      <ul className='skills__list'>
        {skillsOther.map((skill, index) => (
          <li key={index} className='skills__list-item btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
      <h4 className='skills__list-title'>LANGUAGES</h4>
      <ul className='skills__list'>
        {skillsLanguages.map((skill, index) => (
          <li key={index} className='skills__list-item btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
      <h4 className='skills__list-title'>PERSONAL QUALITIES</h4>
      <ul className='skills__list'>
        {skillsPersonal.map((skill, index) => (
          <li key={index} className='skills__list-item btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
