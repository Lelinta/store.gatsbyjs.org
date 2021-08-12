import React from 'react';
import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: 'wonderiencevip.myshopify.com',
  storefrontAccessToken: 5f655c786104d59a9a01489fc2884cd8
});

export const defaultStoreContext = {
  client,
  isCartOpen: false,
  adding: false,
  checkout: { lineItems: [] },
  products: [],
  shop: {},
  addVariantToCart: () => {},
  removeLineItem: () => {},
  updateLineItem: () => {}
};

const StoreContext = React.createContext(defaultStoreContext);

export const withStoreContext = Component => {
  return props => (
    <StoreContext.Consumer>
      {context => <Component {...props} storeContext={context} />}
    </StoreContext.Consumer>
  );
};

export default StoreContext;
