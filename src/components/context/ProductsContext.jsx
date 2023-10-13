import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const useProductsContext = () => {
    return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [sortByPriceAsc, setSortByPriceAsc] = useState(true);
    const [activeCategory, setActiveCategory] = useState('All');
    const [categories, setCategories] = useState([]);


    const getProducts = async () => {
        setLoading(true);
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        const result = await response.json();
        setData(result);
        setFilter(result);
        setLoading(false);
        const uniqueCategories = [...new Set(result.map(product => product.category.name))];
        setCategories(uniqueCategories);
    };



    const filterProduct = (category) => {
        setActiveCategory(category);
        if (category === "All") {
            setFilter(data);
        } else {
            const updatedList = data.filter((product) => product.category.name === category);
            setFilter(updatedList);
            console.log(updatedList)
        }
    };

    const sortProducts = () => {
        const sortedData = [...filter];
        sortedData.sort((a, b) => {
            if (sortByPriceAsc) {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
        setFilter(sortedData);
        setSortByPriceAsc(!sortByPriceAsc);
    };


    useEffect(() => {

        getProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ data, filter, loading, sortByPriceAsc, activeCategory, categories, filterProduct, sortProducts }}>
            {children}
        </ProductContext.Provider>
    );
};
