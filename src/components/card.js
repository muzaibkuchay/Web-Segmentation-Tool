import BarGraph from './barGraph'
import SplitPill from './splitPill'

const Card = (props) => {
  const {
    title,
    image,
    color,
    content,
    size,
    penetration,
    social,
    cardColor = '',
  } = props
  return (
    <div className={`card${cardColor ? ' ' + cardColor : ''}`}>
      <div className='wrapper'>
        <div className={`title`}>{title}</div>
        {image ? (
          <div className='image'>
            <img src={image} alt={title} />
          </div>
        ) : (
          ''
        )}

        <div className='content'>{content}</div>
        {size ? (
          <SplitPill
            backgroundColor='#000000'
            mainClass={`${color}Border`}
            secondaryClass={`${color}Text`}
            tertiaryClass={`${color}Background`}
            label={'Size'}
            numbers={`${size}%`}
          />
        ) : (
          ''
        )}
        {penetration ? (
          <>
            <h3>User Penetration % (MAU+)</h3>
            <BarGraph
              data={[
                {
                  label: '',
                  labelTop: true,
                  percent: Number(penetration),
                  graphLabel: `${penetration}%`,
                },
              ]}
              wrapperClass='typePageGraph'
              secondaryClass={`${color}Background`}
            />
          </>
        ) : (
          ''
        )}
        {social ? (
          <>
            <h3>Top Platform for Dig.Con.</h3>
            <div className='social'>{social}</div>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Card
