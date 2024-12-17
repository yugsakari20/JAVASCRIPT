let url="http://localhost:3000/user"
const userApi = {
    get: async (dataaa) =>{
        const req = await fetch(url)
        const res = await req.json();
        return await res;
    },
    post: async (data) => {
        await fetch(url,{
            method:"post",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(data),
        });
    },  
   
}


export { userApi }