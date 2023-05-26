import { useEffect, useState } from "react";
import ProductCard from "../components/Card";
import axios from "axios";
import {useOutletContext } from "react-router-dom";
import "../style/shop.css";

import ReactPaginate from "react-paginate";
//this package is for pagination to create buttons very easily to move from page to another

const Shop = () => {
  const props = useOutletContext();
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [filterProductTitle, setFilterProductTitle] = useState([]);
  //this state represents which page we are in and we will change it when we click on the button
  const [pageNumber, setPageNumber] = useState(0);
  //here we want to know how many products we need to show  per page
  const productsPerPage = 10;
  // this to store the page we have visited

  const pagesVisited = pageNumber * productsPerPage;
  // now we want to decide how many products we need to display in 1 page
  //this function will take the products and slice it to display the products we need to display
  // 4 page we want to display from 40 - 50 then we map through the displayProducts and display them
  const displayProducts = products
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => <ProductCard key={product.id} product={product} />);
  // if the number decimal it will round it up to get the number of btn each btn show 10 product
  const pageCount = Math.ceil(products.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const getAllProducts = async () => {
    const { data } = await axios.get("/api/products");
    setProducts([...data.rows]);
  };

  const filteredProductByPrice = async () => {
    const { data } = await axios.get(`/api/allProducts/${props[0]}`);
    setFilterProduct(data);
  };

  const filteredProductByTitle = async () => {
    const { data } = await axios.get(`/api/products/${props[1]}`);

    setFilterProductTitle(data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    filteredProductByPrice();
  }, [props]);

  useEffect(() => {
    filteredProductByTitle();
  }, [props]);

  return (
    <div className="shop">
      <div className="allProducts">
        {filterProductTitle.length > 0
          ? filterProductTitle?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : filterProduct.length > 0
          ? filterProduct?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : displayProducts}
      </div>

      {/*
      previouslabel its the btn called previous
      nextlabel its the btn called next
      pagecount its the number of pages we have
      onpagechange its the function that will change the page
      containerclassname its the class name of the container
      previouslinkclassname its the class name of the previous btn
      nextlinkclassname its the class name of the next btn
      disabledclassname its the class name of the disabled btn
      activeclassname its the class name of the active btn
      

      */}
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default Shop;
