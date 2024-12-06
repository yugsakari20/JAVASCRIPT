let url="http://localhost:3000/product"

const productApi = {
    get: async () =>{
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
    delete:async (id) => {
        await fetch(`${url}/${id}`,{
            method:"DELETE",
        });
    },
    patch: async (id, data) => {
        await fetch(`${url}/${id}`, {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        });
      },
}



export { productApi }