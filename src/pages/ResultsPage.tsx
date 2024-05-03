import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useLoaded } from "../assets/hooks/useLoaded";

const Results = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const type = searchParams.get('type');

	const [loaded] = useLoaded();

	const [copied, setCopied] = useState(false);

	const handleCopy = (e) => {
		e.preventDefault();

		navigator.clipboard.writeText(location.href);
		setCopied(true);
	}
	
	return (
		<div className="flex flex-col justify-center items-center h-full gap-20 px-5">
			<h1 className="text-3xl text-center">According to your result... you are an</h1>
			<div className={`text-5xl font-bold font-comfortaa transition-opacity duration-[3000ms] ${loaded ? "opacity-100" : "opacity-0"}`}>{type}</div>
			<div className='transition flex gap-5'>
				<a href="" className="font-comfortaa" onClick={handleCopy}>Share your result!</a>
				{copied && <div className="font-comfortaa font-semibold">Copied!</div>}
			</div>
		</div>
  );
}

export default Results;