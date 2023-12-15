import { useState } from "react";
import Card from "../Card/Card";

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    }

    const handleClearClick = () => {
        setSearchValue('');
    }

    const shouldDisplayClearBtn = searchValue.length > 0;

    const filteredProducts = props.products
        .filter((product) => {
            return product.title.toString().toLowerCase().includes(searchValue.toString().toLowerCase());
        })

    return (
        <div>
            <input type="text" placeholder="Search Products" value={searchValue} onChange={handleInputChange} />
            {shouldDisplayClearBtn && <button onClick={handleClearClick}>Clear</button>}
            <Card products={filteredProducts} deleteProduct={props.deleteProduct} />
        </div>
    )
}

export default SearchBar;