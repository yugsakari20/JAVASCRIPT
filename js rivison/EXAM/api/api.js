let url = "http://localhost:3000/foods";

const foodApi = {
  get: async () => {
    const req = await fetch(url);
    const res = await req.json();
    return await res;
  },
  post: async (data) => {
    await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
};

const deleteFood = async (id) => {
  await fetch(`${url}/${id}`, {
    method: "delete",
  });
};

const foodUpdate = async (data,id) => {
  await fetch (`${url}/${id}`,{
    method:"PATCH",
    headers: {
      "content-type": "application/json",
    },
    body:JSON.stringify(data)
  })
}


export { foodApi, deleteFood, foodUpdate};

