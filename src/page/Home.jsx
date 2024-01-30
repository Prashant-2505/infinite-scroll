import React, { useEffect, useState } from 'react';
import Moviecomponent from '../components/Moviecomponenets';

const Home = () => {
    const [card, setCard] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false); // New state to track loading

    const getData = async () => {
        try {
            setLoading(true); 
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
            const data = await res.json();
            setCard((prevData) => [...prevData, ...data]);
            setPage(page + 1);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false); // Set loading back to false when fetch is completed
        }
    };

    const handleInfiniteScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
            getData();
        }
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleInfiniteScroll);

        return () => {
            window.removeEventListener('scroll', handleInfiniteScroll);
        };
    }, [loading]); // Add loading to the dependency array

    return (
        <div>
            <Moviecomponent movieInfo={card} loading={loading} />
        </div>
    );
};

export default Home;
