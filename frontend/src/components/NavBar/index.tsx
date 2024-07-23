import byteBurpeeLogo from "../../assets/byte-burpee.png";
import letterLogo from "../../assets/letter logo.png";
import { propsNavBar } from "./interfaces";
import usernameIcon from "../../assets/icons/username.png";

export default function NavBar(props : propsNavBar){
    return (
        <div className='p-[30px]'>
            <div className="bg-bb-grey border-[1px] border-bb-orange  rounded-[20px] text-[white] roboto text-[18px] w-full">
                <div className="flex flex-row justify-between items-center m-[10px] ">
                    <div className="flex flex-row items-center justify-center bg-bb-white rounded-[30px] p-[10px] ml-[20px]">
                        <img src={byteBurpeeLogo} className="w-[30px]" />
                        <img src={letterLogo} className="w-[130px]" />
                    </div>
                    <div className="roboto text-[16px] flex flex-row items-center justify-end">
                        <div className="mr-[20px]">
                            <div className="font-bold flex flex-row">
                                <div className="mr-[3px]">{props.user.firstName}</div>
                                <div>{props.user.lastName}</div>
                            </div>
                            <div className="flex justify-end">{props.user.username}</div>
                        </div>
                        <div>
                            <img src={usernameIcon} className="w-[50px] h-[50px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}