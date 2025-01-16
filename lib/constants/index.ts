export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Hesarnaistore';
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'A modern store built with Next.js';
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';

  export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;

  export const signInDefaultValues = {
    email: 'adminbashir@example.com',
    password: 'password',
  };
  export const signUpDefaultValues = {
    name: 'Bashir Karimi',
    email: 'bashir@example.com',
    password: 'password',
    confirmPassword: 'password',
  };
  
  export const shippingAddressDefaultValues = {
    fullName: 'Bashir Karimi',
    streetAddress: '12-59 Takyuhigashi machi',
    city: 'Tomakomai',
    postalCode: '1303-059',
    country: 'JPN',
  }

  export const PAYMENT_METHODS = process.env.PAYMENT_METHODS
  ? process.env.PAYMENT_METHODS.split(', ')
  : ['PayPal', 'Stripe', 'CashOnDelivery'];
export const DEFAULT_PAYMENT_METHOD =
  process.env.DEFAULT_PAYMENT_METHOD || 'PayPal';

  export const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 2;