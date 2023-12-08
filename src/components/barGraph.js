const BarGraph = (props) => {
  const { data, mainClass = '', secondaryClass = '', wrapperClass = '' } = props

  return (
    <div className={`barGraphWrapper${wrapperClass ? ' ' + wrapperClass : ''}`}>
      {data.map((d, i) => {
        return (
          <>
            <div className='barGraphLabel'>
              <span>{d.label}</span>
            </div>
            <div className={`barGraph${mainClass ? ' ' + mainClass : ''}`}>
              <div
                key={`barGraph-${i}-${d.percent}-${d.graphLabel}`}
                className={`bar${secondaryClass ? ' ' + secondaryClass : ''}`}
                style={{ width: `${d.percent}%` }}
              >
                <span>{d.graphLabel}</span>
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default BarGraph
