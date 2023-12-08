import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'

import Scaling from '../components/scaling'

import MultipleChoice from '../components/multipleChoice'
import getType from '../utility/getType'

const logo = '/assets/Tik-Tok-Logo.png'
const closeIcon = '/assets/close.svg'

const Typing = (props) => {
  const {
    questionListOne,
    questionScaling,
    questionListTwo,
    updateSegments,
    segmentState,
    resetSegmentState,
  } = props
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const navigate = useNavigate()

  const nextQuestion = (isValid) => {
    return (
      <div
        role='button'
        className={`button next${isValid ? '' : ' disabledButton'}`}
        onClick={() => (isValid ? setCurrentQuestion(currentQuestion + 1) : '')}
      >
        Next <FiArrowRight height={'24px'} width={'24px'} />
      </div>
    )
  }
  const prevQuestion = (isValid) => {
    return (
      <div
        role='button'
        className={`button back${isValid ? '' : ' disabledButton'}`}
        onClick={() => (isValid ? setCurrentQuestion(currentQuestion - 1) : '')}
      >
        <FiArrowLeft height={'24px'} width={'24px'} /> Back
      </div>
    )
  }

  const [checkedState, setCheckedstate] = useState({})

  const updateSegmentNumbers = () => {
    const allQuestions = [
      ...questionListOne,
      ...questionScaling,
      ...questionListTwo,
    ]
    let update = {
      a: segmentState.a,
      b: segmentState.b,
      c: segmentState.c,
      d: segmentState.d,
      e: segmentState.e,
    }
    for (let i = 0; i < allQuestions.length; i++) {
      if (
        allQuestions[i].vertex in checkedState &&
        checkedState[allQuestions[i].vertex] &&
        checkedState[allQuestions[i].vertex] !== '0'
      ) {
        update = {
          a: update.a + allQuestions[i].values.a,
          b: update.b + allQuestions[i].values.b,
          c: update.c + allQuestions[i].values.c,
          d: update.d + allQuestions[i].values.d,
          e: update.e + allQuestions[i].values.e,
        }
      }
    }
    updateSegments(update)
    return update
  }

  const handleChange = (vertex, values, updateValues, questions) => {
    let data = {
      ...checkedState,
    }

    // if 11 in data, treat as clear all for first question
    if (
      (('11' in data && vertex !== '11' && data['11']) || vertex === '11') &&
      vertex < 13
    ) {
      // stop
      if (vertex !== 11) {
        return
      }
    }
    data[vertex] = values
    // none of the above or no phone... so remove all
    if (vertex === 11 || vertex === 12) {
      resetSegmentState()
      delete data[1]
      delete data[2]
      delete data[3]
      delete data[4]
      delete data[5]
      delete data[6]
      delete data[7]
      delete data[8]
      delete data[9]
      delete data[10]
      setCheckedstate(data)
      return
    }

    setCheckedstate(data)
  }
  const checkValid = (minCount, questions) => {
    let count = 0
    for (let i = 0; i < questions.length; i++) {
      if (
        questions[i].vertex in checkedState &&
        checkedState[questions[i].vertex]
      ) {
        count = count + 1
      }
    }
    return count >= minCount
  }

  const questionPageOne = () => {
    // const checkValid =
    return (
      <>
        <MultipleChoice
          questionText={
            <>
              <p className='questionText'>
                What do you usually do with the app(s) on your phone?
              </p>
              <p className='questionText smaller'>
                Please select all that apply.
              </p>
            </>
          }
          questions={questionListOne}
          keyText='mc1'
          // updateSegments={updateSegments}
          handleChange={handleChange}
          checkedState={checkedState}
        />
        <div className='navigation controls'>
          {nextQuestion(checkValid(1, questionListOne))}
        </div>
      </>
    )
  }

  const questionPageTwo = () => {
    return (
      <>
        <Scaling
          questionText={
            <>
              <p className='questionText'>
                Which statement do you agree with more?
              </p>
              <p className='questionText smaller'>
                Select one response per pair.
              </p>
            </>
          }
          questions={questionScaling}
          keyText='sq'
          // updateSegments={updateSegments}
          handleChange={handleChange}
          checkedState={checkedState}
        />
        <div className='navigation controls'>
          {prevQuestion(true)}
          {nextQuestion(checkValid(4, questionScaling))}
        </div>
      </>
    )
  }

  const submitTyping = () => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const debug = urlParams.get('debug')
    if (debug) {
      updateSegmentNumbers()
      console.log(segmentState)
      console.log(getType(segmentState))
      return
    }
    if (!checkValid(5, questionListTwo)) {
      return
    }

    // navigation.results()
    // navigate('/')
    const isType = getType(updateSegmentNumbers())
    switch (isType) {
      case 'trendInsiders':
        navigate('/types/trend-insiders')
        return
      case 'knowledgeSeekers':
        navigate('/types/knowledge-seekers')
        return
      case 'quickHitters':
        navigate('/types/quick-hitters')
        return
      case 'deepMeaningfuls':
        navigate('/types/deep-meaningfuls')
        return
      case 'cautiousConnectors':
        navigate('/types/cautious-connectors')
        return
      default:
        navigate('/')
        return
    }
  }

  const [selectedCount, setCount] = useState(0)
  const questionPageThree = () => {
    return (
      <>
        <MultipleChoice
          questionText={
            <p className='questionText'>
              Select 5 social/entertainment content types you watch the most.
            </p>
          }
          questions={questionListTwo}
          keyText='mc2'
          // updateSegments={updateSegments}
          limitSelections={5}
          handleChange={handleChange}
          checkedState={checkedState}
          rules={{ selectedCount: selectedCount, setCount: setCount, max: 5 }}
        />
        <div className='navigation controls'>
          {prevQuestion(true)}

          <div
            className={`button${
              checkValid(5, questionListTwo) ? '' : ' disabledButton'
            }`}
            role='button'
            onClick={() => submitTyping()}
          >
            Submit
          </div>
        </div>
      </>
    )
  }

  const questionPage = () => {
    switch (currentQuestion) {
      case 1:
        return questionPageTwo()
      case 2:
        return questionPageThree()
      default:
        // 0
        return questionPageOne()
    }
  }

  const closeOut = () => {
    resetSegmentState()
    navigate('/')
  }

  return (
    <div className='typingWrapper'>
      <div className='questionWrapper'>
        <div className='questions'>
          <div className='navigation'>
            <div className='topNavigationBar'>
              <div role='button' className='close' onClick={() => closeOut()}>
                <img src={closeIcon} alt='X' title='Close' />
              </div>
              <div className='mobileLogo'>
                <img src={logo} alt='TikTok' title='TikTok' />
              </div>
              <div className='pageCount'>{currentQuestion + 1} / 3</div>
            </div>
            <div className='progressBar'>
              <div className={`progress${currentQuestion + 1}`}></div>
            </div>
          </div>

          {questionPage()}
        </div>
      </div>
    </div>
  )
}

export default Typing
