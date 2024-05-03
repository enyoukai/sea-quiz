import { useEffect, useState } from "react";
import Question from "../components/Question";
import questionData from '../assets/questionData.json';
import { useNavigate } from "react-router-dom";


const Test = () => {
	const [questionIndex, setQuestionIndex] = useState(0);
  const [pointValues, setPointValues] = useState({'E': 0, 'I': 0, 'S': 0, 'N': 0, 'T': 0, 'F': 0, 'J': 0, 'P': 0});
  const navigate = useNavigate();

  console.log(pointValues);

  useEffect(() => {
    if (questionIndex === questionData.length) {
      navigate('/results?type=' + convertPointsToType(pointValues));
    }
  }, [questionIndex]);

  function handleQuestionResponse(values) {
    setQuestionIndex(index => index + 1);

    setPointValues((prev) => {
      return {
        ...prev,
        ...values
      }
    });
  }

  return (
    <div className='w-screen h-screen bg-[#dcbdff]'>
      {questionIndex < questionData.length && 
      <Question questionText={questionData[questionIndex].question} 
                responseOne={questionData[questionIndex].responseOne} 
                responseTwo={questionData[questionIndex].responseTwo} 
                handleResponse={handleQuestionResponse}
      />
}
    </div>
  )
}

const convertPointsToType = (points) => {
  let type = '';
  if (points['E'] > points['I']) {
    type += 'E';
  } else {
    type += 'I';
  }

  if (points['S'] > points['N']) {
    type += 'S';
  } else {
    type += 'N';
  }

  if (points['T'] > points['F']) {
    type += 'T';
  } else {
    type += 'F';
  }

  if (points['J'] > points['P']) {
    type += 'J';
  } else {
    type += 'P';
  }

  return type;
}

export default Test;