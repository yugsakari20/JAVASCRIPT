const url = "http://localhost:3000/user"

const userApi = {
    get: async() => {
        const req = await fetch(url)
        const res = await req.json();
        return await res;
    },
    post: async (data) => {
        await fetch(url,{
            method: "POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
    }
}

export {userApi}

