const url = "http://localhost:3000/cart"

const cartApi = {
    get: async () =>{
        const req = await fetch(url)
        const res = await req.json();
        return await res;
    },
    post: async (data) => {
        await fetch(url,{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
    }
}
export {cartApi}