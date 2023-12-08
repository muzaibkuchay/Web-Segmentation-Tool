import PropTypes from 'prop-types'

const getType = (obj) => {
  let largestSegment = 'a'
  for (const [k, v] of Object.entries(obj)) {
    if (v > obj[largestSegment]) {
      largestSegment = k
    }
  }
  switch (largestSegment) {
    case 'a':
      return 'trendInsiders'
    case 'b':
      return 'knowledgeSeekers'
    case 'c':
      return 'quickHitters'
    case 'd':
      return 'deepMeaningfuls'
    case 'e':
      return 'cautiousConnectors'
    default:
      return ''
  }
}

getType.propTypes = {
  obj: PropTypes.shape({
    a: PropTypes.number,
    b: PropTypes.number,
    c: PropTypes.number,
    d: PropTypes.number,
    e: PropTypes.number,
  }),
}

export default getType
