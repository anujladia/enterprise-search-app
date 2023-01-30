import { useState } from 'react';
import Link from 'next/link';

import {
  Button,
  Input,
  Flex,
  Heading,
  Spinner,
} from '@chakra-ui/react';

import { createNewUser } from '@lib/firebase/auth';


import Toast from '@/components/toast';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    if (!email) {
      return Toast.warning('Please provide a email to continue');
    }

    if (!password) {
      return Toast.warning('Please provide a password to continue');
    }

    if (!password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)) {
      return Toast.warning('Password should be atleast 8 characters long, should contain 1 number and 1 special character');
    }

    setLoading(true);
    try {
      const user = await createNewUser({
        email,
        password,
      });

      console.log('What the fuck');
      if (!user) {
        throw new Error('Unable to register');
      }

      Toast.success('User successfully registered');
    } catch (err) {
      console.log(err);
      Toast.error(err.code || err.message || 'Registration failed');
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
      height='100%'
      alignItems='center'
      justifyContent='center'
    >
      <Flex
        direction='column'
        background='gray.100'
        p={12}
        w={'50%'}
        minW='300px'
        rounded={6}
      >
        <Heading mb={6}>
          Sign up
        </Heading>

        <Input
          placeholder='jondoe@example.com'
          variant='filled'
          mb={6}
          type='email'
          name='email'
          onChange={onInputChange}
          autoComplete='off'
        />

        {/* <Input
          placeholder='Jon Doe'
          variant='filled'
          mb={6}
          type='text'
          name='name'
        /> */}

        <Input
          placeholder='********'
          variant='filled'
          mb={6}
          type='password'
          onChange={onInputChange}
          autoComplete='off'
        />

        <Button
          mb={6}
          colorScheme='teal'
          onClick={onSignup}
        >
          {
            loading
              ? <Spinner p='2' />
              : 'Register'
          }
        </Button>

        <Link href='/login'>
          <Button w='100%'>
            Login
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Signup;