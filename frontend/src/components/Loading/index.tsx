import byteBurpeeLogo from "../../assets/byte-burpee.png";
import letterLogo from "../../assets/letter logo.png";

export default function Loading(){

    return (
        <div className="scale-in-ver-center bg-[#1E1E1E] absolute h-full w-full z-50">
            <div className="flex flex-col justify-center items-center h-full w-full">
                <div className="flex flex-col items-center justify-center bg-bb-white rounded-[30px] p-[20px] mb-[20px]">
                    <img src={byteBurpeeLogo} className="w-[200px]" />
                    <img src={letterLogo} className="w-[250px]" />
                </div>
                <div className="mt-[40px]">
                    <div className="loader"></div>
                </div>  
            </div>
           
        </div>
    )
}