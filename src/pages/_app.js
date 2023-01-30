import { useEffect, useReducer } from "react";

import { ChakraProvider } from "@chakra-ui/provider";
// Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify';

import Layout from "@/components/Layout";

import 'react-toastify/dist/ReactToastify.css';

import {
  mainInitialState,
  MainStateContext,
  MainDispatchContext,
} from "@/state-management/index";
import mainReducer from "@/state-management/reducer";

// Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors });

import useAuth from '@/hooks/auth';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(mainReducer, mainInitialState);
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      if (router.pathname === '/login' || router.pathname === '/signup') {
        console.log("why nor redirect");
        router.replace('/');
      }
    } else {
      if (router.pathname !== '/login' && router.pathname !== '/signup') {
        router.replace('/login');
      }
    }
  });

  return (
    <ChakraProvider theme={theme}>
      <MainStateContext.Provider value={state}>
        <MainDispatchContext.Provider value={dispatch}>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer />
          </Layout>
        </ MainDispatchContext.Provider>
      </MainStateContext.Provider>
    </ChakraProvider>
  )
}
