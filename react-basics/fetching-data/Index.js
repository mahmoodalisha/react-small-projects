export const getPosts = async () => {    //ye function post laake dega  is function ke andar hame API calling ka code likhna hai
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{   //returning the data from this API url 
        method: 'GET',
        
    })
    return await response.json();
}