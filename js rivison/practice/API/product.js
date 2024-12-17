let url = "http://localhost:3000/product"


const productApi = {
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
const deleteProduct = async(id)=>{
    await fetch(`${url}/${id}`,{
        method:"delete"
    })
    window.location.reload()
}

export {productApi,deleteProduct}