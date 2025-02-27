import { Header } from "./components/Header"
import MovieCard from "./components/movieCard"
import usePopularMovies from "./hooks/usePopularMovies"


function App() {
  // const [count, setCount] = useState(0)
 usePopularMovies()

  return (
    <div className='min-h-screen bg-zinc-900 text-white'>
      <Header/>
      <MovieCard/>
    </div>
  )
}

export default App
