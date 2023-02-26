function Projects(props) {
  return (
    <div href={props.link} id={props.id} className='projects-list-card'>
      <div className='project-title'>
        <a href={props.link} target="_blank" rel="noreferrer">{props.title}</a>
      </div>
      <p>{props.description}</p>
    </div>
  )
}

export default Projects