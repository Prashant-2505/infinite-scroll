import MovieCard from "./Moviecard";

export default function Moviecomponent({ movieInfo, loading }) {
    return (
        <div className="wrapper">
            <div className="container">
                <h1>List Items</h1>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-9">
                    {movieInfo.map((item) => {
                        return <MovieCard key={item.id} data={item} />;
                    })}
                </div>
                {loading && <p>Loading...</p>}
            </div>
        </div>
    );
}
