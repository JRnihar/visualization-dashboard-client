import { useEffect, useState } from "react";

const useData = () => {
    const [lists, setList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chart')
            .then(res => res.json())
            .then(data => setList(data));
    }, [lists])
    return [lists, setList]
}

export default useData;