export const api = {
    post: async (data) => {
      let req = await fetch(`http://localhost:3000/questions`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });
      let res = await req.json();
      console.log("post", res);
    },
  
    get: async () => {
      let req = await fetch(`http://localhost:3000/questions`);
      let res = await req.json();
      return res;
    },
  };