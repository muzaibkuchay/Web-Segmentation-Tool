import { useNavigate } from 'react-router-dom'
import { AiOutlineClose, AiFillYoutube } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { RiNetflixFill } from 'react-icons/ri'
import { FaTiktok } from 'react-icons/fa'
import Card from '../components/card'

const logo = '/assets/TikTok-Social-Icon-Color-White.png'
const twitter = '/assets/Twitter_X_Logo.svg'
const cautious = '/assets/cautious-connectors-thumb.jpg'
const meaningfuls = '/assets/deep-meaningfuls-thumb.jpg'
const knowledge = '/assets/knowledge-seekers-thumb.jpg'
const quick = '/assets/quick-hitters-thumb.jpg'
const insiders = '/assets/trend-insiders-thumb.jpg'

const Types = () => {
  const navigate = useNavigate()
  const handleOnClick = () => navigate('/')

  return (
    <div className='landingWrapper'>
      <div className='navigation'>
        <div role='button' className='close' onClick={() => handleOnClick()}>
          <AiOutlineClose />
        </div>
      </div>
      <div className='content'>
        <img className='logo' src={logo} alt='TikTok' title='TikTok' />
        <h1>INTRODUCING OUR SEGMENTS</h1>

        <div className='cardWrapper'>
          <Card
            title='Trend Insiders'
            image={insiders}
            color='blue'
            content={
              <ul>
                <li>In the know and leads conversation</li>
                <li>Values personalized algorithm</li>
                <li>Actively shares with others</li>
                <li>Spends hours on digital entertainment</li>
                <li>Penchant for creation</li>
              </ul>
            }
            size='15'
            penetration='64'
            social={
              <div>
                <AiFillYoutube title='YouTube' className='yt' />
                <AiFillInstagram title='Instagram' className='in' />
                <BsFacebook title='Facebook' className='fb' />
                <FaTiktok title='TikTok' className='tt blueFill' />
                <img
                  src={twitter}
                  alt='Twitter / X'
                  title='Twitter/X'
                  className='tw'
                />
              </div>
            }
          />
          <Card
            title='Knowledge Seekers'
            image={knowledge}
            color='red'
            content={
              <ul>
                <li>Social media is a productive tool to learn and grow</li>
                <li>
                  Desires content that inspires and motivates, teaches them
                  something new / understand something
                </li>
                <li>Sees creators as teachers/experts</li>
              </ul>
            }
            size='16'
            penetration='52'
            social={
              <div>
                <AiFillYoutube title='YouTube' className='yt' />
                <BsFacebook title='Facebook' className='fb' />
                <AiFillInstagram title='Instagram' className='in' />
                <FaTiktok title='TikTok' className='tt redFill' />
                <img
                  src={twitter}
                  alt='Twitter / X'
                  title='Twitter/X'
                  className='tw'
                />
              </div>
            }
          />
          <Card
            title='Quick Hitters'
            image={quick}
            color='yellow'
            content={
              <ul>
                <li>Social media is a way to pass the time </li>
                <li>Slower to adopt new tech</li>
                <li>
                  Mindless scrolling can make digital content feel less joyful /
                  more like junk food
                </li>
              </ul>
            }
            size='20'
            penetration='56'
            social={
              <div>
                <AiFillYoutube title='YouTube' className='yt' />
                <BsFacebook title='Facebook' className='fb' />
                <AiFillInstagram title='Instagram' className='in' />             
                <FaTiktok title='TikTok' className='tt yellowFill' />
                <img
                  src={twitter}
                  alt='Twitter / X'
                  title='Twitter/X'
                  className='tw'
                />
              </div>
            }
          />
          <Card
            title='Deep Meaningfuls'
            image={meaningfuls}
            color='green'
            content={
              <ul>
                <li>
                  Craves content that is emotionally powerful - platforms can
                  help curate experiences
                </li>
                <li>Gravitates towards long-form content</li>
                <li>
                  However, believes short-form is an opportunity to quickly
                  de-stress or feel good
                </li>
              </ul>
            }
            size='23'
            penetration='52'
            social={
              <div>
                <AiFillYoutube title='YouTube' className='yt' />
                <AiFillInstagram title='Instagram' className='in' />
                <BsFacebook title='Facebook' className='fb' />      
                <RiNetflixFill title='Netflix' className='ne' />
                <FaTiktok title='TikTok' className='tt greenFill' />
              </div>
            }
          />
          <Card
            title='Cautious Connectors'
            image={cautious}
            color='purple'
            content={
              <ul>
                <li>Prioritizes IRL/offline relationships and engagements</li>
                <li>Cautious about adopting new technology / algorithms</li>
                <li>
                  Feels guilty spending lots of time on digital entertainment
                </li>
                <li>Prefers long-form content</li>
              </ul>
            }
            size='26'
            penetration='32'
            social={
              <div>
                <BsFacebook title='Facebook' className='fb' />
                <AiFillYoutube title='YouTube' className='yt' />
                <AiFillInstagram title='Instagram' className='in' />
                <img
                  src={twitter}
                  alt='Twitter / X'
                  title='Twitter/X'
                  className='tw'
                />
                <RiNetflixFill title='Netflix' className='ne' />
              </div>
            }
          />
        </div>

      </div>
    </div>
  )
}

export default Types
