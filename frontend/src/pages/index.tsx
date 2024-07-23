import { useNavigate } from '../router'
import '../index.css'
import { useEffect, useState } from 'react'
import Menu from '../components/Menu';
import NavBar from '../components/NavBar';
import { userNavBar } from '../components/NavBar/interfaces';
import { POST } from '../utils/requests';

export default function App() {

    const [user, setUser] = useState<userNavBar | null>(null)
    const navigate = useNavigate()

    async function getUser(token:string) :Promise<userNavBar>{
      let response = await POST('/web/user/token/', {'token': token})
      return response?.data
    }

    useEffect(() => {
      const fetchUser = async () => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            navigate('/login');
        } else {
            try {
                const user = await getUser(token);
                setUser(user);
            } catch (error) {
                console.error('Error fetching user:', error);
                navigate('/login');
            }
        }
      };
      if(!user){
        fetchUser();
      }
      

    });


    return (
      <div className='h-full w-full bg-[]'>
        <div className="grid grid-cols-5 grid-rows-6 gap-0">
          <div className='p-[30px] col-start-1 col-end-2 row-start-1 row-end-3' >
            <Menu activeMenu='home'/>
          </div>
          <div className='col-start-2 col-end-6 row-start-1 row-end-2'>
            <NavBar user={user? user: {'firstName': '', 'lastName': '', 'username': ''}}/>
          </div>
          <div className="col-start-1 col-end-2 row-start-2 row-end-6">
          </div>
          
        </div>
          
      </div>
    )
}
