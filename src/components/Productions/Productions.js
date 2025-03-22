import { productions } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Productions.css'
 
const Productions = () => {
  if (!productions.length) return null

  return (
    <section id='productions' className='section productions'>
      <h2 className='section__title'>Professional Projects</h2>
      <div className='productions__grid'>
        {productions.map((project) => (
          <ProjectContainer key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Productions
