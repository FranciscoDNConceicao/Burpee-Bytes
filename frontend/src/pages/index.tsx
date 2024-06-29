import { Link, useNavigate, useParams } from '../router'
import Login from './login'
import '../index.css'

function App() {
  const navigate = useNavigate()

  navigate('/login')
  return (
    <div className='h-full bg-[bb-orange]'>
      <Login />
    </div>
  )
}

export default App
