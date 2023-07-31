const Btncontainer = ({ work, precentitem, setitem }) => {
  return (
    <div className="btn-container">
      {' '}
      {work.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => setitem(index)}
            className={index === precentitem ? 'job-btn active-btn' : 'job-btn'}
          >
            {item.company}
          </button>
        )
      })}
    </div>
  )
}
export default Btncontainer
