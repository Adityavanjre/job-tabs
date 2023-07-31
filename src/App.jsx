import { useEffect, useState } from 'react'
import Jobinfo from './Jobinfo'
import Btncontainer from './Btncontainer'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [currentItem, setCurrentItem] = useState(0)

  //current items

  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  }

  return (
    <section className="jobs-center">
      <Btncontainer
        work={jobs}
        precentitem={currentItem}
        setitem={setCurrentItem}
      />
      <Jobinfo work={jobs} precentitem={currentItem} />
    </section>
  )
}
export default App
