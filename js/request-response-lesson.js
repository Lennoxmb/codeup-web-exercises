// async function getCharacter(movie){
//
// }

const movieChar = async (movie) => {
    try {
        let response =await fetch(`https://swapi.dev/api/people/${movie}`)
        let data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
    }
}


(async()=>{
    let lukeSkywalker = await movieChar(7);
    console.log(lukeSkywalker)
})();
