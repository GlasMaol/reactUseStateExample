import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://santosnr6.github.io/Data/sinus_products.json')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                setError(error);
                console.error('Ett fel inträffade!', error);
            });
    }, []);

    return (
        <div className="container">
            {error ? (
                <p className="error">Kunde inte ladda produkterna: {error.message}</p>
            ) : (
                <ul>
                    {products.map(product => (
                        <li key={product.serial}>
                            <img src={product.cdnUrl} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>{product.shortDesc}</p>
                            <p>Pris: {product.price} kr</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ProductList;
