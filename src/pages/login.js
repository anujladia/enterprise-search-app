import { useState } from 'react';
import Link from 'next/link';

import {
  Button,
  Input,
  Flex,
  Heading,
  Spinner,
} from '@chakra-ui/react';

import { login } from '@lib/firebase/auth';

import Toast from '@/components/toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    if (loading) return;

    if (!email) {
      return Toast.warning('Please provide a email to continue');
    }

    if (!password) {
      return Toast.warning('Please provide a password to continue');
    }

    setLoading(true);
    try {
      const user = await login({
        email,
        password,
      });

      console.log(user);

      Toast.success('User successfully logged in');
    } catch (err) {
      Toast.error(err.code || err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };
  
  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    
    setPassword(value);
  }

  return (
    <Flex
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        direction="column"
        background="gray.100"
        p={12}
        w={'50%'}
        minW='300px'
        rounded={6}
      >
        <Heading mb={6}>
          Login
        </Heading>

        <Input
          placeholder="jondoe@example.com"
          variant="filled"
          mb={3}
          type="email"
          name="email"
          onChange={onInputChange}
        />

        <Input
          placeholder="********"
          variant="filled"
          mb={3}
          type="password"
          name="password"
          onChange={onInputChange}
        />

        <Button
          mb={3}
          colorScheme="teal"
          onClick={onLogin}
        >
          {loading
            ? <Spinner p='2' />
            : 'Log in'
          }
        </Button>

        <Link href="/signup">
          <Button w='100%'>
            Sign up
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Login;