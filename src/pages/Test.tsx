import { useState } from "react";

const Test = () => {
	const [questionIndex, setQuestionIndex] = useState(0);



  return (
    <div className='w-screen h-screen bg-[#dcbdff]'>
      <div className='flex flex-col items-center h-full p-10 gap-5'>
        <div className="w-1/4 text-center text-gray-900 text-xl font-comfortaa font-bold">Q8/12: Suddenly, the robot glides in, it whispers something to the cats that makes them stop.</div>
        <img src="https://via.placeholder.com/150" alt="robot" className="w-1/4 rounded-full" />
        <button className="bg-gray-200 text-gray-900 p-2 rounded-sm">turn into a sigma</button>
        <button className="bg-gray-200 text-gray-900 p-2 rounded-sm">turn into a sigma</button>
      </div>
    </div>
  )
}

export default Test;