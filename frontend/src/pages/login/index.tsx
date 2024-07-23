import byteBurpeeLogo from "../../assets/byte-burpee.png";
import letterLogo from "../../assets/letter logo.png";
import usernameIcon from "../../assets/icons/username.png";
import passwordIcon from "../../assets/icons/password.png";
import emailIcon from "../../assets/icons/email.png";
import { ChangeEvent, FormEvent, useState } from "react";
import { VerifyLoginCredentials, VerifyRegisterCredentials } from "../../utils/Login/VerifyLoginRegister";
import { FormLogin, FormRegister, ErrorMessageLogin, ErrorMessageRegister } from "./interface";
import { POST } from "../../utils/requests";
import { useNavigate } from "../../router";
import Loading from "../../components/Loading";


export default function Login() {
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<Boolean>(false);

    const [isLogin, setIsLogin] = useState<Boolean>(true);

    const [errorType, setErrorType] = useState<string[]>([]);
    const [errorTypeRegister, setErrorTypeRegister] = useState<string[]>([]);


    const [formLogin, setFormLogin] = useState<FormLogin>({
        'username': '',
        'password': ''
    });
    const [formRegister, setFormRegister] = useState<FormRegister>({
        'username': '',
        'email': '',
        'password': '',
        'confirm_password': '',
        'first_name': '',
        'last_name': ''
    });
    const [formErrorsLogin, setFromErrorsLogin] = useState<ErrorMessageLogin[]>([]);
    const [formErrorsRegister, setFromErrorsRegister] = useState<ErrorMessageRegister[]>([]);

    const handleChangeLogin = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormLogin((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleChangeRegister = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormRegister((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const changeLoginRegister = () => {
        setIsLogin(!isLogin);
    };
    async function Login (login:FormLogin) {
        const res = await POST("/web/login/", login)
        return res
    }

    const handleSubmitLogin = async (e: FormEvent) => {
        e.preventDefault();
        var messages_array = VerifyLoginCredentials(formLogin);
        setFromErrorsLogin(messages_array);
        var type_array:string[] = [];
        messages_array.map(item => {
            if (item.message_type) {
                item.message_type.map(message_type => {
                    type_array.push(message_type);
                });
            }
        });
        setErrorType(type_array);

        if(type_array.length === 0 && messages_array.length === 0 ){
            setIsLoading(true)
            const res = await Login(formLogin)
            setIsLoading(false)
            if(res.status === 200 && res.data.token){
                localStorage.setItem('authToken', res.data.token);
                navigate('/')
            }
        }
    };

    async function Register (register:FormRegister) {
        const res = await POST("/web/register/", register)
        console.log(res)
        return res
    }

    function handleSubmitRegister(e: FormEvent) {

        var messages_array = VerifyRegisterCredentials(formRegister);
        setFromErrorsRegister(messages_array);
        var type_array:string[] = [];
        messages_array.map(item => {
            if (item.message_type) {
                item.message_type.map(message_type => {
                    type_array.push(message_type);
                });
            }
        });
        setErrorTypeRegister(type_array);

        if(type_array.length === 0 && messages_array.length === 0){
            const ress = Register(formRegister)
            console.log(ress)
        }


        e.preventDefault();
    }

    return (
        <div className="h-full gradient-background flex justify-center items-center">

            {isLoading ? <Loading /> : <div></div>}
            <div className="w-[33%] bg-bb-white h-[90%] border-[7px] border-bb-orange flex flex-col p-[50px] max-[1300px]:w-[50%] max-[700px]:w-[70%]">
                <div className="flex flex-col items-center justify-center border-[5px] border-bb-orange rounded-[40px] mx-[100px] py-[20px]">
                    <img src={byteBurpeeLogo} className="w-[200px]" />
                    <img src={letterLogo} className="w-[250px]" />
                </div>
                <div className="h-full">

                    {isLogin ?
                        <form className="flex flex-col w-full my-[20px] justify-between h-full pb-[40px]" onSubmit={handleSubmitLogin}>
                            <div>
                                <div className="my-[10px] flex flex-row h-[40px]">
                                    <div className={` h-full w-[10%] rounded-s-xl flex justify-center align-middle items-center ${errorType.includes('username') ? 'bg-[#e63737] error-message-box' : 'bg-bb-orange'} `}>
                                        <img src={usernameIcon} className="w-[30px] h-[30px]" />
                                    </div>
                                    <input name="username" value={formLogin.username} onChange={handleChangeLogin} type="text" placeholder="Username" className={`text-[18px] w-[90%] pl-[20px] border-[3px] ${errorType.includes('username') ? 'border-[#e63737] error-message-box' : 'border-bb-orange'} rounded-r-xl roboto-condensed-font text-bb-grey placeholder:text-bb-grey placeholder:text-[18px] focus:outline-none`} />

                                </div>
                                <div className="my-[10px] flex flex-row h-[40px]">
                                    <div className={`h-full w-[10%] rounded-s-xl flex justify-center align-middle items-center ${errorType.includes('password') ? 'bg-[#e63737] error-message-box' : 'bg-bb-orange'}`}>
                                        <img src={passwordIcon} className="w-[30px] h-[30px]" />
                                    </div>
                                    <input name="password" value={formLogin.password} onChange={handleChangeLogin} type="password" placeholder="Password" className={`text-[18px] w-[90%] pl-[20px] border-[3px] ${errorType.includes('password') ? 'border-[#e63737] error-message-box' : 'border-bb-orange'} rounded-r-xl roboto-condensed-font text-bb-grey placeholder:text-bb-grey placeholder:text-[18px] focus:outline-none`}  />
                                </div>

                                <div className="roboto-condensed-font text-bb-grey hover:underline cursor-pointer">
                                    Forgot your password?
                                </div>
                                <div className="pt-[10px]">
                                    {formErrorsLogin.map(item => {
                                        return (
                                            <div className="roboto text-[#e63737] font-semibold text-[16px]">
                                                {item.message}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <button type="submit" className="bg-bb-orange text-bb-white text-[22px] roboto-condensed-font py-[5px] border-[3px] border-bb-orange hover:bg-bb-white hover:text-bb-orange">
                                    Submit
                                </button>
                                <div className="roboto-condensed-font text-[16px] w-full flex justify-center text-bb-grey hover:underline cursor-pointer mt-[4px]" onClick={changeLoginRegister}>
                                    Register as new user
                                </div>
                            </div>

                        </form>
                        :
                        <form className="flex flex-col w-full my-[20px] justify-between h-full pb-[40px]" onSubmit={handleSubmitRegister}>
                            <div>
                                <div className="my-[10px] flex flex-row h-[40px]">
                                    <div className={`h-full w-[10%] rounded-s-xl flex justify-center align-middle items-center ${errorTypeRegister.includes('username') ? 'bg-[#e63737] error-message-box' : 'bg-bb-orange'} `}>
                                        <img src={usernameIcon} className="w-[30px] h-[30px]" />
                                    </div>
                                    <input name="username" value={formRegister.username} onChange={handleChangeRegister} type="text" placeholder="Username" className={`text-[18px] w-[90%] pl-[20px] border-[3px] ${errorTypeRegister.includes('username') ? 'border-[#e63737] error-message-box' : 'border-bb-orange'} rounded-r-xl roboto-condensed-font text-bb-grey placeholder:text-bb-grey placeholder:text-[18px] focus:outline-none`}  />
                                </div>
                                <div className="flex flex-row my-[10px]">
                                    <div className=" flex flex-row h-[40px] w-[50%] mr-[5px]">
                                        <div className={`h-full w-[20%] rounded-s-xl flex justify-center align-middle items-center ${errorTypeRegister.includes('first_name') ? 'bg-[#e63737] error-message-box' : 'bg-bb-orange'} `}>
                                            <img src={usernameIcon} className="w-[30px] h-[30px]" />
                                        </div>
                                        <input name="first_name" value={formRegister.first_name} onChange={handleChangeRegister} type="text" placeholder="First Name" className={`text-[18px] w-[90%] pl-[20px] border-[3px] ${errorTypeRegister.includes('first_name') ? 'border-[#e63737] error-message-box' : 'border-bb-orange'} rounded-r-xl roboto-condensed-font text-bb-grey placeholder:text-bb-grey placeholder:text-[18px] focus:outline-none`}   />
                                    </div>
                                    <div className=" flex flex-row h-[40px] w-[50%] ml-[5px]">
                                        <div className={`h-full w-[20%] rounded-s-xl flex justify-center align-middle items-center ${errorTypeRegister.includes('last_name') ? 'bg-[#e63737] error-message-box' : 'bg-bb-orange'} `}>
                                            <img src={usernameIcon} className="w-[30px] h-[30px]" />
                                        </div>
                                        <input name="last_name" value={formRegister.last_name} onChange={handleChangeRegister} type="text" placeholder="Last Name" className={`text-[18px] w-[90%] pl-[20px] border-[3px] ${errorTypeRegister.includes('last_name') ? 'border-[#e63737] error-message-box' : 'border-bb-orange'} rounded-r-xl roboto-condensed-font text-bb-grey placeholder:text-bb-grey placeholder:text-[18px] focus:outline-none`}   />
                                    </div>
                                </div>
                                
                                <div className="my-[10px] flex flex-row h-[40px]">
                                    <div className={`h-full w-[10%] rounded-s-xl flex justify-center align-middle items-center ${errorTypeRegister.includes('email') ? 'bg-[#e63737] error-message-box' : 'bg-bb-orange'} `}>
                                        <img src={emailIcon} className="w-[30px] h-[30px]" />
                                    </div>
                                    <input name="email" value={formRegister.email} onChange={handleChangeRegister} type="text" placeholder="Email" className={`text-[18px] w-[90%] pl-[20px] border-[3px] ${errorTypeRegister.includes('email') ? 'border-[#e63737] error-message-box' : 'border-bb-orange'} rounded-r-xl roboto-condensed-font text-bb-grey placeholder:text-bb-grey placeholder:text-[18px] focus:outline-none`}   />
                                </div>
                                <div className="my-[10px] flex flex-row h-[40px]">
                                    <div className={`h-full w-[10%] rounded-s-xl flex justify-center align-middle items-center ${errorTypeRegister.includes('password') ? 'bg-[#e63737] error-message-box' : 'bg-bb-orange'} `}>
                                        <img src={passwordIcon} className="w-[30px] h-[30px]" />
                                    </div>
                                    <input name="password" value={formRegister.password} onChange={handleChangeRegister} type="password" placeholder="Password" className={`text-[18px] w-[90%] pl-[20px] border-[3px] ${errorTypeRegister.includes('password') ? 'border-[#e63737] error-message-box' : 'border-bb-orange'} rounded-r-xl roboto-condensed-font text-bb-grey placeholder:text-bb-grey placeholder:text-[18px] focus:outline-none`}   />
                                </div>
                                <div className="my-[10px] flex flex-row h-[40px]">
                                    <div className={`h-full w-[10%] rounded-s-xl flex justify-center align-middle items-center ${errorTypeRegister.includes('confirm_password') ? 'bg-[#e63737] error-message-box' : 'bg-bb-orange'} `}>
                                        <img src={passwordIcon} className="w-[30px] h-[30px]" />
                                    </div>
                                    <input name="confirm_password" value={formRegister.confirm_password} onChange={handleChangeRegister} type="password" placeholder="Confirm Password" className={`text-[18px] w-[90%] pl-[20px] border-[3px] ${errorTypeRegister.includes('confirm_password') ? 'border-[#e63737] error-message-box' : 'border-bb-orange'} rounded-r-xl roboto-condensed-font text-bb-grey placeholder:text-bb-grey placeholder:text-[18px] focus:outline-none`}   />
                                </div>
                                <div className="h-[50px] overflow-clip">
                                    {formErrorsRegister.map(item => {
                                        return (
                                            <div className="roboto text-[#e63737] font-semibold text-[16px]">
                                                *{item.message}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <button type="submit" className="bg-bb-orange text-bb-white text-[22px] roboto-condensed-font py-[5px] border-[3px] border-bb-orange hover:bg-bb-white hover:text-bb-orange">
                                    Submit
                                </button>
                                <div className="roboto-condensed-font text-[16px] w-full flex justify-center text-bb-grey hover:underline cursor-pointer mt-[4px]" onClick={changeLoginRegister}>
                                    I already have an account
                                </div>
                            </div>

                        </form>}
                </div>
            </div>
        </div>
    );
}
