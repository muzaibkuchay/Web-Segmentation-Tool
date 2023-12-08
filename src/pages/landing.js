import { useNavigate } from 'react-router-dom'

const logo = '/assets/TikTok-Social-Icon-Color-White.png'

const Landing = (props) => {
  const { resetResults } = props
  const navigate = useNavigate()
  const onChange = () => {
    resetResults()
    navigate('/typing')
  }
  return (
    <div className='landingWrapper'>
      <div className='content'>
        <img className='logo' src={logo} alt='TikTok' title='TikTok' />
        <h1>Segmenting the World of Digital Content Seekers</h1>
        <p>
          Segmentations are meant to distill complexity down into a usable
          framework. It's not possible to think about the needs of billions of
          individuals, but we can create targeted strategies for a handful of
          consumer segments/personas. This segmentation will not only help us
          tailor our messaging and targeting, it will also help TikTok to
          prioritize the audiences that are easiest to capture and conserve
          limited resources.
        </p>
        <p>
          As TikTok enters a new phase of brand maturity, the time is right for
          us to better understand the landscape of Digital Content Seekers
          around the world. What do users and non-users have in common? Who are
          the most "persuadable"? What are their content needs? What does their
          digital content diet look like?
        </p>
        <p>
          This globally-consistent framework gives our entire organization a
          singular view of the consumer. This consistency, will help TikTok to
          fuel targeted communications and media strategies to drive adoption
          and develop deeper connections with digital content seekers.
        </p>
        <div className='columnWrapper'>
          <div className='column33'>
            <div
              role='button'
              className='landing button'
              onClick={() => navigate('/types')}
            >
              <span>
                Get to Know Our Segments:
                <br />
                Hear their voices
              </span>
            </div>
          </div>
    
        </div>
        
      </div>
    </div>
  )
}

export default Landing
