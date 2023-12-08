const SplitPill = (props) => {
  const {
    label,
    numbers,
    width = 0,
    mainClass = '',
    secondaryClass = '',
    tertiaryClass = '',
    backgroundColor = 'transparent',
  } = props
  const style =
    width > 0
      ? {
          width: `${width}%`,
        }
      : {}
  style['background'] = backgroundColor

  return (
    <div
      className={`splitPill${mainClass ? ' ' + mainClass : ''}`}
      style={style}
    >
      <span className={`text${secondaryClass ? ' ' + secondaryClass : ''}`}>
        {label}
      </span>
      <span className={`numbers${tertiaryClass ? ' ' + tertiaryClass : ''}`}>
        {numbers}
      </span>
    </div>
  )
}

export default SplitPill
