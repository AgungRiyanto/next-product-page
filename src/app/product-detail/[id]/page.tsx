'use client';

import { productById } from "@/app/services";
import { Card, CardBody, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";

export default function ProductDetail({
  params
}: {params: {id: number}}) {
  const [data, setData] = useState<Product | null>(null);

  useEffect(() => {
    getProductDetail();

    async function getProductDetail() {
      try {
        const res = await productById(params?.id);
        setData(res);
      } catch (e) {}
    }
  }, []);



  return (
    <Container maxW='2xl' bg='white' centerContent minH={'100vh'}>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        marginTop={5}
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={data?.thumbnail}
          alt='Caffe Latte'
        />

        <Stack>
          <CardBody>
            <Heading size='md'>{data?.title}</Heading>

            <Text py='2'>
              {data?.description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              ${data?.price}
            </Text>
          </CardBody>
        </Stack>
      </Card>
    </Container>
  )
}