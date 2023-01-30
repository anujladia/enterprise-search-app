import { useContext, useEffect, useRef } from "react";
import Link from "next/link";

import {
  Flex,
  ButtonGroup,
  Heading,
  Spacer,
  Button,
  Box,
  InputGroup,
  Input,
  InputRightElement,
  InputLeftElement,
  Kbd,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import '@/utils/keyboardShortcuts';

import AccountDropdown from "./AccountDropdown";

import {
  MainDispatchContext,
  MainStateContext
} from "@/state-management";
import { useRouter } from "next/router";
import useAuth from "@/hooks/auth";

const Header = ({ session }) => {
  const dispatch = useContext(MainDispatchContext);
  const state = useContext(MainStateContext);
  const searchField = useRef(null);
  const { user } = useAuth();

  useEffect(() => {
    if (state.searchFieldFocus) {
      searchField.current.focus();
    }
  }, [state.searchFieldFocus])

  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' p='2' justifyContent='space-between'>
      <Box p='2'>
        <Link href="/">
          <Heading size='md'>Searchify</Heading>
        </Link>
      </Box>
      {user
        ? <>
          <Spacer p='5' />
          <Box p='2'  w='50%' minW='250px'>
            <InputGroup size='lg'>
              <InputLeftElement
                bg='gray.300'
                borderLeftRadius='20'
                cursor="pointer"
                children={<SearchIcon color='white' />}
                onClick={() => {
                  dispatch({
                    type: "START_SEARCHING"
                  });
                }}
              />
              <Input
                ref={searchField}
                type='search'
                placeholder='Search content'
                pl="3em"
                borderRadius='20'
                onChange={(e) => {
                  dispatch({
                    type: "UPDATE_SEARCH_KEYWORD",
                    payload: {
                      searchKeyword: e.target.value,
                    }
                  });
                }}
                onBlur={() => {
                  dispatch({
                    type: "SEARCH_FIELD_BLUR"
                  })
                }}
              />
              <InputRightElement
                children={<Kbd>/</Kbd>}
              />
            </InputGroup>
          </Box>
          <Spacer p='5' />
        </>
        : <></>
      }
      <Box p="2">
        {!user
          ? <ButtonGroup gap='2' p="2">
            <Link href="/signup">
              <Button colorScheme='teal'>
                Sign Up
              </Button>
            </Link>
            <Link href="/login">
              <Button colorScheme='teal'>
                Log in
              </Button>
            </Link>
          </ButtonGroup>
          : <Flex justifyContent='space-between'>
            <AccountDropdown />
          </Flex>
        }
      </Box>
    </Flex>
  );
};

export default Header;