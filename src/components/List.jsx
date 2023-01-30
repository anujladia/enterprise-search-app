import { Stack, CardBody, Heading, Text, Card, Image } from "@chakra-ui/react";

const List = ({
  imgURL = 'https://images.unsplash.com/photo-1667489022797-ab608913feeb',
  heading = 'sdfbsdkjfsdjhfkjsd fkjsdf kjsdf sdkf',
  date = '29 August'
}) => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '100px' }}
        src={imgURL}
        alt='Caffe Latte'
      />

      <Stack>
        <CardBody>
          <Heading size='md'>{heading}</Heading>

          <Text py='2'>
            {date}
          </Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default List;