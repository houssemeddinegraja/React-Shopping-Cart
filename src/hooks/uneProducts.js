import { useState, useEffect } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => {
            if (response.status >= 400) {
                throw new Error("Ah there's a fucking server error...");
            }
            return response.json();
        })
        .then(response => setProducts(response))
        .catch(err => {setError(err);})
        .finally(() => setLoading(false));
    }, []);

    return { products, loading, error };
}

export default useProducts;
