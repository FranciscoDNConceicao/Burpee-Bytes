import { ErrorMessageLogin, ErrorMessageRegister, FormLogin, FormRegister } from "../../pages/login/interface";


export function VerifyLoginCredentials(loginForm : FormLogin): ErrorMessageLogin[] {
    var messages_array : ErrorMessageLogin[] = []
    var message_required : ErrorMessageLogin = {
        'message': '',
        'message_type': []
    }
    if(!loginForm.username && loginForm.username === ''){
        message_required.message += 'Username'
        message_required.message_type?.push('username')
    }
    if(!loginForm.password && loginForm.password === ''){
        if(message_required.message != ''){
            message_required.message +=  ', password'
        }else{
            message_required.message +=  'Password'
        }
        message_required.message_type?.push('password')
    }
    if(message_required.message != '') {
        message_required.message += ' is required'
        messages_array.push(message_required)
    }
    return messages_array
}

export function VerifyRegisterCredentials(formRegister: FormRegister): ErrorMessageRegister[]{

    var messages_array : ErrorMessageRegister[] = []

    var message_required : ErrorMessageLogin = {
        'message': '',
        'message_type': []
    }
    if(!formRegister.username && formRegister.username === ''){
        message_required.message += 'Username'
        message_required.message_type?.push('username')
    }
    if(!formRegister.first_name && formRegister.first_name === ''){
        if(message_required.message != ''){
            message_required.message += ', first name'
            
        }else{
            message_required.message += 'First Name'
        }
        message_required.message_type?.push('first_name')
    }
    if(!formRegister.last_name && formRegister.last_name === ''){
        if(message_required.message != ''){
            message_required.message += ', last name'
        }else{
            message_required.message += 'Last name'
        }
        message_required.message_type?.push('last_name')
    }
    if(!formRegister.email && formRegister.email === ''){
        if(message_required.message != ''){
            message_required.message += ', email'
            
        }else{
            message_required.message += 'Email'
        }
        message_required.message_type?.push('email')
    }
    if(!formRegister.password && formRegister.password === ''){
        if(message_required.message != ''){
            message_required.message += ', password'
        }else{
            message_required.message += 'Password'
        }
        message_required.message_type?.push('password')
    }
    if(!formRegister.confirm_password && formRegister.confirm_password === ''){
        if(message_required.message != ''){
            message_required.message += ', confirm password'
        }else{
            message_required.message += 'Confirm password'
        }
        message_required.message_type?.push('confirm_password')
    }
    if(message_required.message != '') {
        message_required.message += ' is required'
        messages_array.push(message_required)
    }
    if(formRegister.password !== formRegister.confirm_password){
        messages_array.push({
            'message' : 'The passwords doesnt match',
            'message_type': ['password', 'confirm_password']
        })
    }
        return messages_array
}