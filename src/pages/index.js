import { useContext, useEffect } from 'react';
import Head from 'next/head';

import {
  VStack,
  Flex,
  Skeleton,
  Box,
  Heading,
  Highlight,
  Kbd,
} from '@chakra-ui/react';

import List from '@/components/List';

import {
  MainStateContext,
  MainDispatchContext
} from '@/state-management/index';

import keyboardShortcuts from '@/utils/keyboardShortcuts';
import useAuth from '@/hooks/auth';
import { useRouter } from 'next/router';

export default function Home() {
  const state = useContext(MainStateContext);
  const dispatch = useContext(MainDispatchContext);
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  // if (!isLoggedIn) {
  //   return router.push('/');
  // }

  useEffect(() => {
    keyboardShortcuts(dispatch);
  }, []);

  useEffect(() => {
    if (state.searchingData) {
      setTimeout(() => {
        dispatch({
          type: 'STOP_SEARCHING',
        })
      }, 4000);
    }
  }, [state.searchingData]);

  return (
    <>
      <Head>
        <title>Enterprise Search</title>
        <meta name='description' content='Enterprise Search to make searches in multiple other apps' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Flex
        w='100%'
        h='100%'
        alignItems='center'
        justifyContent='center'
      >
        {!state.searchKeyword
          ? <Box
            w='50%'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
          >
            <Heading lineHeight='tall'>
              <Highlight
                query={['spotlight', 'Google Suite', 'Notion']}
                styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
              >
                With this app, you can spotlight words from Google Suite, Notion etc...
              </Highlight>
            </Heading>
            <Heading lineHeight='tall'>
              Press <Kbd>/</Kbd> & start searching now
            </Heading>
          </Box>
          : <Box
            w='60%'
            h='100%'
            overflowY='scroll'
            maxH='100%'
          >
            <Heading size='md' mb={6}>
              Search results
            </Heading>
            <VStack
              spacing={4}
              align='stretch'
            >
              {state.searchingData
                ? [1, 2, 3].map(i => (
                  <Skeleton key={`skel-${i}`} isLoaded={!state.searchingData}>
                    <List />
                  </Skeleton>
                ))
                : [1, 2, 3, 4, 5, 6, 8,7].map(i => (
                  <List key={`list-${i}`} />
                ))
              }
            </VStack>
          </Box>
        }
      </Flex>
    </>
  )
}
