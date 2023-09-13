import { Box, Button, Card, CardBody, CardFooter, Center, Divider, Grid, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react"

interface PostItem {
    id: number;
    title: string;
    content: string;
    createdDt: string;
    createdUser: string;
    like: number;
    view: number;
    image: string;
}

const data: PostItem[] = [
    {
        id: 1,
        title: 'Living room Sofa',
        content: `This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design. This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design.`,
        createdDt: '2023년 9월 11일',
        createdUser: 'ssj5037',
        like: 30,
        view: 200,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
        id: 2,
        title: 'Living room Sofa',
        content: `This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design. This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design.`,
        createdDt: '2023년 9월 11일',
        createdUser: 'ssj5037',
        like: 30,
        view: 200,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
        id: 3,
        title: 'Living room Sofa',
        content: `This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design. This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design.`,
        createdDt: '2023년 9월 11일',
        createdUser: 'ssj5037',
        like: 30,
        view: 200,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
        id: 4,
        title: 'Living room Sofa',
        content: `This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design. This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design.`,
        createdDt: '2023년 9월 11일',
        createdUser: 'ssj5037',
        like: 30,
        view: 200,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
        id: 5,
        title: 'Living room Sofa',
        content: `This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design. This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design.`,
        createdDt: '2023년 9월 11일',
        createdUser: 'ssj5037',
        like: 30,
        view: 200,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
        id: 6,
        title: 'Living room Sofa',
        content: `This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design. This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design.`,
        createdDt: '2023년 9월 11일',
        createdUser: 'ssj5037',
        like: 30,
        view: 200,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
];

const ItemList = data.map((item: PostItem) => (
    <Card maxW='sm' className="postListItem" key={ item.id }>
        <CardBody>
            <Image
                src={item.image}
                borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
                <Heading size='md'>{item.title}</Heading>
                <Box h={'100px'}>
                    <Text className="postListItemContent">
                        {item.content}
                    </Text>
                </Box>
                <Divider />
                <Text>{item.createdDt}
                    <span className="postListItemView">👁 {item.view} ❤ {item.like}</span>
                </Text>
            </Stack>
        </CardBody>
    </Card>
));

export const Like = () => {
    return (
        <>
            <Center m='30px 0'>
                <Heading size='lg'>좋아요 한 게시글</Heading>
            </Center>
            <Divider />
            <Grid m='20px 0' templateColumns='repeat(4, 1fr)' gap={3}>
                { ItemList }
            </Grid>
        </>
    )
}