import PropTypes from 'prop-types'

const getValues = (obj, vertex) => {
  const output = obj.filter((obj) => {
    return obj.vertex === vertex
  })
  if (output) {
    if ('values' in output[0]) {
      return output[0].values
    }
  }

  // default
  return { a: 0, b: 0, c: 0, d: 0, e: 0 }
}

getValues.propTypes = {
  obj: PropTypes.shape({
    a: PropTypes.number,
    b: PropTypes.number,
    c: PropTypes.number,
    d: PropTypes.number,
    e: PropTypes.number,
  }),
  vertex: PropTypes.number,
}

export default getValues
