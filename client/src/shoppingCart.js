import React from 'react';
import { useQuery } from "@apollo/client";
import { ShoppingCard } from './shoppingCard';
import { Grid } from '@mui/material'
import Navbar from './navbar';
import { GET_SHOPPING_CART } from './queries';


/**
 * Quotes Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
export const ShoppingCart = () => {
  const { loading, error, data } = useQuery(GET_SHOPPING_CART);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  //console.log(data.shoppingCart);
  let total_price = 0;

  for (let i = 0; i < data.shoppingCart.length; i++) {
    total_price += data.shoppingCart[i].price;
  } 

  return (
    <>
    <Navbar />
    <h1>Shopping Cart</h1>
    <h2>Total: ${total_price}</h2>
    <Grid container spacing={2} marginTop={2}>
      {
      data.shoppingCart.map((concert) => (
        <Grid item key={concert.id} xs={12} md={3} >
          <ShoppingCard concert={concert}/>
          </Grid>
      ))
    }

    </Grid>
    </>
  );
};






