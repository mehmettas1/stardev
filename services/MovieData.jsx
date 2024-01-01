const url = `https://${process.env.API_HOST}/auto-complete?q=game%20of%20thr`;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': (process.env.API_KEY),
        'X-RapidAPI-Host': (process.env.API_HOST),
    }
};
// '1efcfbc006msh574ea19274a731cp1e2f44jsn7e3d0f7a6156',

export const movieData = async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result.d[0].l);
        return result.d;
        // console.log(response.json());
        // return response.json();    
    } catch (error) {
        console.error(error);
    }
}
