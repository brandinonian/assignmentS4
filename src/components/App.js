import { useEffect, useState } from "react";
import "../css/global.css";
import SearchBar from "./SearchBar/SearchBar";

const App = () => {

    const [productsState, setProductsState] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((productsArray) => { setProductsState(productsArray) });
    }, []);

    const deleteProduct = (id) => {
        setProductsState(productsState.filter((product) => product.id != id));
    }

    const hasProducts = productsState.length > 0;

    return (
        <div className="container">
            <h1>Fake Store Products</h1>

            {hasProducts ? <SearchBar products={productsState} deleteProduct={deleteProduct}/> : "Loading..."}
        </div>
    )
}

export default App;