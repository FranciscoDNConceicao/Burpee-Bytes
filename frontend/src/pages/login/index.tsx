import byteBurpeeLogo from "../../assets/byte-burpee.png"
import letterLogo from "../../assets/letter logo.png"
import usernameIcon from "../../assets/icons/username.png"
import passwordIcon from "../../assets/icons/password.png"
import emailIcon from "../../assets/icons/email.png"
import { ChangeEvent, FormEvent, useState } from "react"


interface FormLogin {
    username: string;
    password: string;
}
interface ErrorMessageLogin {
    message? : string;
    message_type? : string;
}

interface FormRegister{
    username: string;
    email: string;
    password: string;
    confirm_password: string;
}

interface ErrorMessageRegister{
    message? : string;
    message_type? : string;
}

export default function Login() {

    const [isLogin, setIsLogin] = useState<Boolean>(true)

    const [formLogin, setFormLogin] = useState<FormLogin>({
        'username': '',
        'password': ''
    })
    const [formRegister, setFormRegister] = useState<FormRegister>({
        'username': '',
        'email': '',
        'password': '',
        'confirm_password': '',
    })
    const [formErrorsLogin, setFromErrorsLogin] = useState<ErrorMessageLogin[]>([])
    const [formErrorsRegister, setFromErrorsRegister] = useState<ErrorMessageRegister[]>([{
        'message' : 'The passwords doesnt match'
    },{
        'message' : 'The passwords doesnt match'
    },{
        'message' : 'The passwords doesnt match'
    },{
        'message' : 'The passwords doesnt match'
    }])

    const handleChangeLogin = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log(name, value)
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
        setIsLogin(!isLogin)
    }


    const handleSubmitLogin = (e: FormEvent) => {
        e.preventDefault();
        var messages_array : ErrorMessageLogin[] = []
        var message_required = ""
        if(!formLogin.username && formLogin.username === ''){
            message_required += 'Username'
        }
        if(!formLogin.password && formLogin.password === ''){
            if(message_required != ''){
                message_required += ', password'
            }else{
                message_required += 'Password'
            }
        }
        if(message_required != '') {
            message_required += ' is required'
            messages_array.push({
                'message': message_required
            })
        }
        setFromErrorsLogin(messages_array)
        console.log('Form data submitted:', formLogin);

    };
    function handleSubmitRegister(e: FormEvent) {
        var messages_array : ErrorMessageRegister[] = []

        var message_required = ""
        if(!formRegister.username && formRegister.username === ''){
            message_required += 'Username'
        }
        if(!formRegister.email && formRegister.email === ''){
            if(message_required != ''){
                message_required += ', email'
            }else{
                message_required += 'Email'
            }
        }
        if(!formRegister.password && formRegister.password === ''){
            if(message_required != ''){
                message_required += ', password'
            }else{
                message_required += 'Password'
            }
        }
        if(!formRegister.confirm_password && formRegister.confirm_password === ''){
            if(message_required != ''){
                message_required += ', confirm password'
            }else{
                message_required += 'Confirm password'
            }
        }
        if(message_required != '') {
            message_required += ' is required'
            messages_array.push({
                'message': message_required
            })
        }
        if(formRegister.password !== formRegister.confirm_password){
            messages_array.push({
                'message' : 'The passwords doesnt match'
            })
        }
        setFromErrorsRegister(messages_array)
        e.preventDefault()
    }

    return (
        <div className="h-full gradient-background flex justify-center items-center">
            <div className="w-[33%] bg-bb-white h-[90%] border-[7px] border-bb-orange flex flex-col p-[50px] max-[1300px]:w-[50%] max-[700px]:w-[70%]">
                <div className="flex flex-col items-center justify-center border-[5px] border-bb-orange rounded-[40px] mx-[100px] py-[20px]">
                    <img src={byteBurpeeLogo} className="w-[200px]"/>
                    <img src={letterLogo} className="w-[250px]" />
                </div>
                <div className="h-full">
                    
                    {    isLogin ? 
                        <form className="flex flex-col w-full my-[20px] justify-between h-full pb-[40px]" onSubmit={handleSubmitLogin}>
                            <div>
                                <div className="my-[10px] flex flex-row h-[50px]">
                                    <div className="bg-bb-orange h-full w-[10%] rounded-s-xl flex justify-center align-middle items-center">
                                        <img src={usernameIcon} className="w-[40px] h-[40px]" />
                                    </div>
                                    <input name="username" value={formLogin.username} onChange={handleChangeLogin} type="text" placeholder="Username" className="text-[20px] w-[90%] pl-[20px] border-[3px] border-bb-orange rounded-r-xl roboto-condensed-font text-bb-grey placeholder:text-bb-grey placeholder:text-[20px] focus:outline-none"/>

                                </div>
                                <div className="my-[10px] flex flex-row h-[50px]">
                                    <div className="bg-bb-orange h-full w-[10%] rounded-s-xl flex justify-center align-middle items-center">
                                        <img src={passwordIcon} className="w-[40px] h-[40px]" />
                                    </div>
                                    <input name="password" value={formLogin.password} onChange={handleChangeLogin} type="password" placeholder="Password" className="text-[20px] w-[90%] pl-[20px] border-[3px] border-bb-orange rounded-r-xl roboto-condensed-font text-bb-grey placeholder:text-bb-grey placeholder:text-[20px] focus:outline-none"/>
                                </div>

                                <div className="roboto-condensed-font text-bb-grey hover:underline cursor-pointer">
                                    Forgot your password?
                                </div>
                                <div className="pt-[10px]">
                                    {
                                        formErrorsLogin.map(item => {
                                            return (
                                                <div className="roboto text-[#e63737] font-semibold text-[16px]">
                                                    *{item.message}
                                                </div> 
                                            )
                                        }) 
                                            
                                    }
                                </div>
                            </div>
                            
                            <div className="flex flex-col w-full">
                                <button type="submit" className="bg-bb-orange text-bb-white text-[28px] roboto-condensed-font py-[5px] border-[3px] border-bb-orange hover:bg-bb-white hover:text-bb-orange">
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
                                <div className="my-[10px] flex flex-row h-[50px]">
                                    <div className="bg-bb-orange h-full w-[10%] rounded-s-xl flex justify-center align-middle items-center">
                                        <img src={usernameIcon} className="w-[40px] h-[40px]" />
                                    </div>
                                    <input name="username" value={formRegister.username} onChange={handleChangeRegister} type="text" placeholder="Username" className="text-[20px] w-[90%] pl-[20px] border-[3px] border-bb-orange rounded-r-xl roboto-condensed-font text-bb-grey placeholder:text-bb-grey placeholder:text-[20px] focus:outline-none"/>
                                </div>
                                <div className="my-[10px] flex flex-row h-[50px]">
                                    <div className="bg-bb-orange h-full w-[10%] rounded-s-xl flex justify-center align-middle items-center">
                                        <img src={emailIcon} className="w-[40px] h-[40px]" />
                                    </div>
                                    <input name="email" value={formRegister.email} onChange={handleChangeRegister} type="text" placeholder="Email" className="text-[20px] w-[90%] pl-[20px] border-[3px] border-bb-orange rounded-r-xl roboto-condensed-font text-bb-grey placeholder:text-bb-grey placeholder:text-[20px] focus:outline-none"/>
                                </div>
                                <div className="my-[10px] flex flex-row h-[50px]">
                                    <div className="bg-bb-orange h-full w-[10%] rounded-s-xl flex justify-center align-middle items-center">
                                        <img src={passwordIcon} className="w-[40px] h-[40px]" />
                                    </div>
                                    <input name="password" value={formRegister.password} onChange={handleChangeRegister} type="password" placeholder="Password" className="text-[20px] w-[90%] pl-[20px] border-[3px] border-bb-orange rounded-r-xl roboto-condensed-font text-bb-grey placeholder:text-bb-grey placeholder:text-[20px] focus:outline-none"/>
                                </div>
                                <div className="my-[10px] flex flex-row h-[50px]">
                                    <div className="bg-bb-orange h-full w-[10%] rounded-s-xl flex justify-center align-middle items-center">
                                        <img src={passwordIcon} className="w-[40px] h-[40px]" />
                                    </div>
                                    <input name="confirm_password" value={formRegister.confirm_password} onChange={handleChangeRegister} type="password" placeholder="Confirm Password" className="text-[20px] w-[90%] pl-[20px] border-[3px] border-bb-orange rounded-r-xl roboto-condensed-font text-bb-grey placeholder:text-bb-grey placeholder:text-[20px] focus:outline-none"/>
                                </div>
                                <div className="h-[50px] overflow-clip">
                                    {
                                    formErrorsRegister.map(item => {
                                        return (
                                            <div className="roboto text-[#e63737] font-semibold text-[16px]">
                                                *{item.message}
                                            </div> 
                                        )
                                    }) 
                                        
                                    }
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <button type="submit" className="bg-bb-orange text-bb-white text-[28px] roboto-condensed-font py-[5px] border-[3px] border-bb-orange hover:bg-bb-white hover:text-bb-orange">
                                    Submit
                                </button>
                                <div className="roboto-condensed-font text-[16px] w-full flex justify-center text-bb-grey hover:underline cursor-pointer mt-[4px]" onClick={changeLoginRegister}>
                                    I already have an account
                                </div>
                            </div>
                        
                        </form>
                    
                    }
                </div>
            </div>
        </div>
    )
}

