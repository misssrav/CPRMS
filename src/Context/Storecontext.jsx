import React, { createContext, useState, useEffect } from "react";
// import all_product from "../Components/Assets2/all_product";

export const StoreContext = createContext(null);
// const getdefaultcart = () => {
//   let cart = {};
//   for (let index = 0; index < 300 + 1; index++) {
//     cart[index] = 0;
//   }
//   return cart;
// };

const StoreContextProvider = (props) => {
  const [all_product, setAll_Product] = useState([]);
  //const [cartItems, setCartItems] = useState(getdefaultcart());

  useEffect(() => {
    fetch("http://localhost:4000/allstores")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => setAll_Product(data));

    // if (localStorage.getItem("auth-token")) {
    //   fetch("http://localhost:4000/getcartdata", {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "auth-token": `${localStorage.getItem("auth-token")}`,
    //       "Content-Type": "application/json",
    //     },
    //     body: null,
    //   })
    //     .then((response) => {
    //       console.log(response);
    //       return response.json();
    //     })
    //     .then((data) => setCartItems(data));
    // }
  }, []);

  const contextValue = {
    all_product,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
