import { useEffect, useState } from "react"

const TitleList = ({title,url}) => {
    const[data,setData] = useState([]);
    const apiKey = '87dfa1c669eea853da609d4968d294be';

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/${url}&api_key=${apiKey}`);
            const result = await response.json();
            setData(result.results || []);
        };

        fetchData();
    },[url]);

    return(
        <div className="TitleList">
            <div className="Title">
                <h1>{title}</h1>
                <div className="titles=wrapper">
                    {data.slice(0,5).map((item) => (
                        <Item key={item.id} title={item.name || item.original_title} backdrop={item.backdrop_path} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TitleList;