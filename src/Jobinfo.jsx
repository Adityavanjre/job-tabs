import Duties from './Duties'

const Jobinfo = ({ work, precentitem }) => {
  const { company, dates, duties, title } = work[precentitem]

  return (
    <article className="job-info">
      <h3> {title} </h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties respo={duties} />
    </article>
  )
}
export default Jobinfo
