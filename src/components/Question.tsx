const Question = ({questionText, responseOne, responseTwo, handleResponse}) => {
	return (
		<div className='flex flex-col items-center h-full p-10 gap-5 justify-center'>
			<div className="text-center text-gray-900 text-xl font-comfortaa font-bold">{questionText}</div>
			<img src="https://via.placeholder.com/150" alt="robot" className="w-1/4 rounded-full" />
			<button onClick={() => handleResponse(responseOne.values)} className="bg-gray-200 text-gray-900 p-2 rounded-sm font-comfortaa">{responseOne.text}</button>
			<button onClick={() => handleResponse(responseTwo.values)} className="bg-gray-200 text-gray-900 p-2 rounded-sm font-comfortaa">{responseTwo.text}</button>
		</div>
	)

}

export default Question;