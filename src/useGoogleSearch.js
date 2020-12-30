import{useState, useEffect} from 'react';
import API_KEY from './keys';


const CONTEXT_KEY = "56032cfe89c29dc49";// i tregon google cilen search engine to use

   const useGoogleSearch = (term) => { //kalojme nje term ne search engine
    //HOOK, kthen te dhena dhe ben desplay on the page

    const [data , setData] = useState(null);

    useEffect(() =>{
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY} &cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }

        fetchData();

    }, [term] )

    return {data}

};

export default useGoogleSearch
