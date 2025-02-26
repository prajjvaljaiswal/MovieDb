import { useEffect } from "react"

function App() {
  // const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log("useEffect")
  },[])

  return (
    <div className='text-white'>
      App
    </div>
  )
}

export default App
