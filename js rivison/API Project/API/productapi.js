const url = "http://localhost:3000/products"

const productapi = {
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

const deleteproduct = async (id) => {
    await fetch(`${url}/${id}`,{
        method:"delete"
    })
    window.location.reload();
}

const updateProduct = async (data, id) => {
    await fetch(`${url}/${id}`,{
        method: "PATCH",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
}

export  { productapi ,deleteproduct, updateProduct };