

export interface FormLogin {
    username: string;
    password: string;
}
export interface ErrorMessageLogin {
    message? : string;
    message_type? : string[];
}

export interface FormRegister{
    username: string;
    email: string;
    password: string;
    confirm_password: string;
}

export interface ErrorMessageRegister{
    message? : string;
    message_type? : string[];
}


