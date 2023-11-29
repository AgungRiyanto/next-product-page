'use client';
import { Card, CardBody, Container, Divider, Heading, Stack, Text, Image, SimpleGrid, InputGroup, Input, InputRightElement, Button} from '@chakra-ui/react'
import {RiCloseCircleFill, RiSearch2Line} from 'react-icons/ri'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import ProductCard from './components/product-card';
import { getProducts, searchProduct } from './services';

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    getData();

    async function getData() {
      try {
        const res = await getProducts();
        setData(res?.products);
      } catch (e) {}
    }
  }, []);

  const handleClickProduct = (productId: number) => {
    router.push('/product-detail/' + productId);
  }

  const handleSearch = async() => {
    try {
      const res = await searchProduct(keyword);
      setData(res?.products);
    } catch (e) {}
  }

  return (
    <Container maxW='2xl' bg='white' centerContent minH={'100vh'}>
      <InputGroup marginBottom={'10px'} mt={5}>
        <Input size={'md'} value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder='Search Product...' />
        <InputRightElement>
          {keyword.length > 0 && <RiCloseCircleFill color='grey' onClick={() => setKeyword('')} />}
        </InputRightElement>
      </InputGroup>
      <Button onClick={handleSearch} rightIcon={<RiSearch2Line />} colorScheme='green' width={'100%'}>
        Search
      </Button>
      <SimpleGrid mt={5} spacing={3} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        {
          data.map((item) => <ProductCard item={item} onClick={handleClickProduct} />)
        }
      </SimpleGrid>
    </Container>
  )
}
