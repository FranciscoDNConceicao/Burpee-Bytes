import axios, { AxiosResponse } from "axios";
export const POST = async (url:string, data:any) : Promise<any> => {
    var base_url = "http://localhost:3000"
    try {
        if(url){
            console.log(data)
            const response: AxiosResponse = await axios.post(base_url + url, JSON.stringify(data), {
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            return response?.data;
        }else{
            console.log('Invalid parameter')
            return Promise.reject('Invalid parameter');
        }
    }catch (error){
        console.error('Error');
        return Promise.reject(error);
    }
}

export const GET = async (url:string) : Promise<unknown> => {
    
    try {
        if(url){
            const response: AxiosResponse = await axios.get(url,{
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            return response?.data;
        }else{
            console.log('Invalid parameter')
            return Promise.reject('Invalid parameter');
        }
    }catch (error){
        console.error('Error');
        return Promise.reject(error);
    }
}