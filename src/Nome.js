import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    //let name = 'Nelson Vin';
    const [name, setName] = useState('victor');
    const [age, setAge] = useState(30);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);
    //   const [blogs, setBlogs] = useState(null);
    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    // ]);

  const {data,isPending,Error}=useFetch('http://localhost:8000/blogs');
    const handleCick = () => {
        alert("You have Clicked me");
    }

    const handleCickParam = (name) => {
        //   alert("My Name is : "+setName(name));
        setName(name);
        setAge(45);
    }

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    // useEffect(() => {
    //     console.log('use effect ran');
    //     console.log(blogs);
    // }, [name]);     

    // useEffect(() => {
    //     setTimeout(
    //         () => {
    //             fetch('http://localhost:8000/blogs')
    //                 .then(res => {
    //                     //check if re=== ok
    //                     if (!res.ok) {
    //                         //throw an error
    //                         throw Error('API Response not OK');
    //                     }
    //                     return res.json();
    //                 })
    //                 .then(
    //                     (data) => {
    //                         console.log(data);
    //                         setBlogs(data);
    //                         setIsPending(false);
    //                         setError(null);
    //                     })
    //                 .catch((error) => {
    //                     console.log(error.message);
    //                     setIsPending(false);
    //                     setError(error.message);
    //                 })
    //         }, 500// timeout
    //     );
    // }, []);
    // // run when only name state changes

    return (
        <div className="home">Home Page
            {/* <p>Name : {name} and Age {age}</p> */}
            {/* <button onClick={handleCick}>Click Me</button>
         <button onClick={()=>{handleCickParam('Nelson')}}>Click Me for Param</button> */}

            {/* {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Content : {blog.body}</p>
                    <p>Written By : {blog.author}</p>

                </div>
            ))} */}
            {/* use props to pass the blogs to bloglist component */}
            {/* {blogs && <BlogList blogs={blogs} title="All Blog" handleDelete={handleDelete} />} */}


            {/* conditional checking,, if error is null, second part wont be displayed */}
            {Error && <div>{Error}</div>}
            {isPending && <div>Loading .......</div>}
            {data && <BlogList blogs={data} title="All Blog" />}


            <button onClick={() => { setName('GRAGS') }}>change name</button>
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="All Blogs" handleDelete={handleDelete}/> */}

        </div>

    );
}

export default Home;