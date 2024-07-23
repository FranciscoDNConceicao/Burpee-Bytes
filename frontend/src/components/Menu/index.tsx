import iconHome from '../../assets/icons/home.png'
import searchHome from '../../assets/icons/search.png'
import { propsInterfaces } from './interfaces'

export default function Menu(props: propsInterfaces){

    return (
        <div className="bg-bb-grey border-[1px] border-bb-orange  rounded-[20px]  text-[white]  roboto text-[18px] ">
            <div className='flex flex-col p-[20px] '>
                <div className='flex flex-row cursor-pointer m-[4px] items-center'>
                    <div><img src={iconHome} className="w-[30px] h-[30px]" /></div>
                    <div className={`ml-[10px] ${props.activeMenu == 'home'? `font-bold` : ``}`}>Home</div>
                </div>
                <div className='flex flex-row cursor-pointer m-[4px] items-center'>
                    <div><img src={searchHome} className="w-[30px] h-[30px]"></img></div>
                    <div className={`ml-[10px] ${props.activeMenu == 'search'? `font-bold
                        ` : ``}`}>Search</div>
                </div>
            </div>
        </div>
       
    )
}
