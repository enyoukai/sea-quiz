import { Link } from "react-router-dom";
import { useLoaded } from "../assets/hooks/useLoaded";

const Home = () => {
  const [loaded] = useLoaded();

  return (
    <div className='h-full flex flex-col justify-center items-center gap-20'>
      <h1 className='font-comfortaa text-5xl text-center'>What Sea Animal Are You?</h1>
      <Link to='/test' className={`font-comfortaa font-2xl text-3xl hover:text-4xl transition-opacity duration-[2000ms] ${loaded ? "opacity-100" : "opacity-0"}`}>Start</Link>
    </div>
  )
}

export default Home;