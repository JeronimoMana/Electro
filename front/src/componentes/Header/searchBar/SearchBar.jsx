import { NavLink } from 'react-router-dom';
import style from './SearchBar.module.css';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

const SearchBar = ({ onSelectProduct }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const inputRef = useRef(null);
    const products = useSelector(state => state.allProducts);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        const results = products.filter(product =>
            (product.brand && product.brand.toLowerCase().includes(value.toLowerCase())) ||
            (product.category && product.category.toLowerCase().includes(value.toLowerCase()))
        );
        setSearchResults(results);
        setShowResults(true);
    };

    const handleSelectProduct = (product) => {
        setSearchTerm('');
        setShowResults(false);
        onSelectProduct(product);
    };

    const handleClickOutside = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            setShowResults(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={style.wdt_search_container}>
            <div className="input-group flex-nowrap mb-3" ref={inputRef}>
                <button className={`dropdown-toggle ${style.wdt_dropdown}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories...
                </button>
                <ul className={`dropdown-menu ${style.menu_dropdown}`}>
                    <NavLink to="/shop_smartphone"><li><span className="dropdown-item">Smartphone</span></li></NavLink>
                    <NavLink to="/shop_notebook"><li><span className="dropdown-item">Notebook</span></li></NavLink>
                    <NavLink to="/shop_camera"><li><span className="dropdown-item">Camera</span></li></NavLink>
                    <NavLink to="/shop_accesories"><li><span className="dropdown-item">Accesories</span></li></NavLink>
                    <li><hr className="dropdown-divider" /></li>
                    <NavLink to="/shop_all"><li><span className="dropdown-item">All categories</span></li></NavLink>
                </ul>

                <input type="text" placeholder="Notebook, Smartphone, Bancho" className={`form-control ${style.input}`} value={searchTerm} onChange={handleSearch} />
                {showResults && searchTerm.trim() && (
                    <ul className={style.searchResults}>
                        {searchResults.map(product => (
                            <NavLink to={`/shop_${product.category.toLowerCase()}`}>
                                <li key={product.id} onClick={() => handleSelectProduct(product)}>
                                    {product.brand} ({product.category})
                                </li>
                            </NavLink>
                        ))}
                    </ul>
                )}
                <button className={`btn ${style.btn_search}`} type="button" id="inputGroupFileAddon04">Search</button>
            </div>

        </div>
    );
};

export default SearchBar;
