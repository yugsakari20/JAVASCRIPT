let url = "http://localhost:3000/student"


const studentApi = {
    get: async () => {
        const req = await fetch(url);
        const res = await req.json()
        return await res;
    },
    post: async (data) => {
        await fetch(url,{
            method: "POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(data)
        })
    }
};

const deleteStudent = async (id) =>{
    await fetch (`${url}/${id}`,{
        method:"DELETE"
    })
  
}

const updateStudent = async (data,id) => {
    await fetch (`${url}/${id}`,{
        method:"PATCH",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(data)
    })
}

export {studentApi,deleteStudent,updateStudent}