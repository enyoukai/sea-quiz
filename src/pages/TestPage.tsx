import { useState } from "react";
import Question from "../components/Question";
import questionData from '../assets/questionData.json';

const Test = () => {
	const [questionIndex, setQuestionIndex] = useState(0);

  function handleResponse() {
    setQuestionIndex(index => index + 1);
  }


  return (
    <div className='w-screen h-screen bg-[#dcbdff]'>
      <Question questionText={questionData[questionIndex].question} 
                responseOne={questionData[questionIndex].responseOne} 
                responseTwo={questionData[questionIndex].responseTwo} 
                handleResponse={handleResponse}
      />
    </div>
  )
}

export default Test;