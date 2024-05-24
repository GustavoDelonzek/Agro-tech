import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            const productsArray = [];
            querySnapshot.forEach((doc) => {
                productsArray.push({ ...doc.data(), id: doc.id });
            });
            console.log(querySnapshot);
            setProducts(productsArray);
        };
        getProducts();
    }, []);
    return (
        <div>
            <h1>Lista de Produtos</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - R$ {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}