import { FaAnglesRight } from 'react-icons/fa6'
import { v4 as uuidv4 } from 'uuid'

const Duties = ({ respo }) => {
  const id = uuidv4()
  //   console.log(id)
  return (
    <div>
      {respo.map((duty, index) => {
        return (
          <div key={index} className="job-desc">
            <FaAnglesRight className="job-icon" />
            <p>{duty}</p>
          </div>
        )
      })}
    </div>
  )
}
export default Duties
