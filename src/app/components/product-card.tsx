import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";

type Props = {
  item: Product;
  onClick: (productId: number) => void;
}

export default function ProductCard(props: Props) {
  const {item, onClick} = props;
  return (
    <Card onClick={() => onClick(item?.id)}>
      <CardBody>
        <Image
          src={item?.thumbnail}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
          width={'130px'}
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{item?.title}</Heading>
          <Text>
            {item?.description}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            ${item?.price}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  )
}