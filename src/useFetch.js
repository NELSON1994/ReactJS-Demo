import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    useEffect(() => {
        // const abortController=new AbortController();
        setTimeout(
            () => {
                // fetch(url) , {signal: abortController.abort}
                fetch(url)
                    // fetch('http://localhost:8000/blogs')
                    .then(res => {
                        //check if re=== ok
                        if (!res.ok) {
                            //throw an error
                            throw Error('API Response not OK');
                        }
                        return res.json();
                    })
                    .then(
                        (data) => {
                            console.log(data);
                            setData(data);
                            setIsPending(false);
                            setError(null);
                        })
                    .catch((error) => {
                        console.log(error.message);
                        // if(error.name === 'AbortError'){
                        //     console.log('Updatng state aborted');
                        // }else{
                        setIsPending(false);
                        setError(error.message);
                        // }

                    })
            }, 500// timeout
        );
        //     return () =>{console.log('clean up');
        //     abortController.abort();
        // }
    }, [url]);//when urlchanges, this function will be rendered to run
    // run when only name state changes

    return {
        data, isPending, error
    }
}

export default useFetch;