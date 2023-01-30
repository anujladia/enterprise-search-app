import { useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Image,
  Flex,
  Spacer,
  
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Tooltip,
  Spinner,
} from "@chakra-ui/react";

import { InfoIcon } from "@chakra-ui/icons";

import Toast from "@/components/toast";

import { addApp } from "@/pages/api/apps";

const AppCard = ({
  id = "gmail",
  name = 'Gmail',
  account = "anuj.ladia@gmail.com",
  appDescription = 'sdfbsdkjfsdjhfkjsd fkjsdf kjsdf sdkf',
  createdOn = '29 August',
  image = "https://cdn.cdnlogo.com/logos/g/24/gmail-icon.svg",
  status = 0,
}) => {
  const [loading, setLoading] = useState(false);

  const onAddApp = async () => {
    setLoading(true);
    try {
      await addApp({
        appId: id,
        userId: 1,
      });

      Toast.success('App connected successfully');
    } catch (err) {
      Toast.error('Unable to connect with the app');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <Flex direction="row" justifyContent='space-between'>
          <Flex direction="row" w='100%'>
            <Image
              w="32px"
              src={image}
              justifyContent={"flex-start"}
            />
            <Spacer p="2" />
            <Heading size='md' w="100%">{name}</Heading>
          </Flex>
          <Tooltip
            label={appDescription}
            placement='auto-start'
          >
            <InfoIcon color='gray.400' />
          </Tooltip>
        </Flex>
      </CardHeader>
      <CardBody>
        <Stat size='sm'>
          <StatLabel>Account</StatLabel>
          <StatNumber size='sm'>{account}</StatNumber>
          <StatHelpText>{createdOn}</StatHelpText>
        </Stat>
      </CardBody>
      <CardFooter>
        {status
          ? <Button
            variant='ghost'
          >
            Delete
          </Button>
          : <Button
            colorScheme="green"
            onClick={onAddApp}
          >
            {loading
              ? <Spinner size='sm' />
              : 'Connect'
            }
          </Button>
        }        
      </CardFooter>
    </Card>
  );
};

export default AppCard;