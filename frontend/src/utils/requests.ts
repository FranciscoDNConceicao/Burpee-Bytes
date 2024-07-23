import axios, { AxiosResponse } from "axios";
export const POST = async (url:string, data:any) : Promise<any> => {
    var base_url = "http://127.0.0.1:8000"
    console.log(base_url + url)
    try {
        if(url){
            const response: AxiosResponse = await axios.post(base_url + url, JSON.stringify(data), {
                headers: {
                  'Content-Type': 'application/json'
                }
              });
            return response;
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
    var base_url = "http://127.0.0.1:8000"
    try {
        if(url){
            const response: AxiosResponse = await axios.get(base_url + url,{
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            return response;
        }else{
            console.log('Invalid parameter')
            return Promise.reject('Invalid parameter');
        }
    }catch (error){
        console.error('Error');
        return Promise.reject(error);
    }
}