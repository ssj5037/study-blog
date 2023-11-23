import { Avatar, Box, Button, ButtonGroup, Divider, Flex, HStack, Heading, Spacer, Stack, Tag, Text, Textarea, VStack } from "@chakra-ui/react"
import { AuthContext } from "context/authContext";
import { useContext } from "react";

interface PostItem {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    like: number;
    view: number;
    image: string;
    tags: string[];
    comments: Comment[];
}
interface Comment {
    id: number;
    content: string;
    createdAt: string;
    createdUser: string;
    createdUserImg: string;
    like: number;
    comments?: Comment;
}

const data: PostItem = {
    id: 1,
    title: '제목입니다.',
    content: `This sofa is perfect for modern tropical spaces, baroque inspired
    spaces, earthy toned spaces and for people who love a chic design with a
    sprinkle of vintage design. This sofa is perfect for modern tropical spaces, baroque inspired
    spaces, earthy toned spaces and for people who love a chic design with a
    sprinkle of vintage design.`,
    createdAt: '2023-11-23',
    like: 10,
    view: 200,
    image: 'https://picsum.photos/700/300',
    tags: [
        '태그1', '태그2', '태그3', '태그4', '태그5',
    ],
    comments: [
        {
            id: 1,
            content: '댓글입니다.',
            createdAt: '2023-11-23 12:10',
            createdUser: 'ssj5037',
            createdUserImg: 'https://picsum.photos/id/1/100',
            like: 5,
        },
        {
            id: 2,
            content: '댓글입니다.',
            createdAt: '2023-11-23 12:10',
            createdUser: 'ssj5037',
            createdUserImg: 'https://picsum.photos/id/1/100',
            like: 5,
        },
        {
            id: 3,
            content: '댓글입니다.',
            createdAt: '2023-11-23 12:10',
            createdUser: 'ssj5037',
            createdUserImg: 'https://picsum.photos/id/1/100',
            like: 5,
        }
    ]
};

export const Post = () => {
    
    const userInfo = useContext(AuthContext);
    return (
        <>
            <ButtonGroup m='10px 0' spacing="3" variant={"outline"}>
                <Button colorScheme="blue">수정</Button>
                <Button colorScheme="red">삭제</Button>
            </ButtonGroup>
            <VStack spacing={8} m='20px 0' align='stretch'>
                <VStack>
                    <Heading size='2xl'>{ data.title }</Heading>
                    <HStack spacing={4}>
                        <Text>{ data.createdAt }</Text>
                        <Text>👁 {data.view} ❤ { data.like}</Text>
                    </HStack>
                </VStack>
                <HStack>
                    <Heading fontSize='xl'>태그</Heading>
                    {
                        data.tags.map((item, idx) => (
                            <Tag size="lg" variant="solid" colorScheme="blue" key={idx}>{ item }</Tag>
                        ))
                    }
                </HStack>
                <Text fontSize='xl'>
                    <img src={ data.image }></img>
                    { data.content }
                </Text>
                <Flex minWidth='75vw' alignItems='center' gap='100'>
                    <Button colorScheme="grey" variant="ghost" size="lg">{ `< 이전 게시글` }</Button>
                    <Spacer />
                    <Button colorScheme="grey" variant="ghost" size="lg">{`다음 게시글 >`}</Button>
                </Flex>
                <Divider />
                <VStack align='stretch'>
                    <Heading fontSize='xl'>댓글</Heading>
                    <VStack align='stretch' m="10px 50px" spacing={5}>
                        <Box>
                            {
                                userInfo ?
                                    <HStack>
                                        <Avatar src={userInfo.photoURL ? userInfo.photoURL : `/public/image/no-image.png`} />
                                        <Heading size='md'>{`${userInfo?.displayName}(${userInfo?.email})`}</Heading>
                                    </HStack>
                                    : <></>
                            }
                            <HStack>
                                <Textarea ml='57px' placeholder='댓글을 작성해주세요' size='sm' resize='none' disabled={!userInfo}></Textarea>
                                <Button colorScheme="blue" variant="ghost" disabled={!userInfo}>작성</Button>
                            </HStack>
                        </Box>
                        <Divider />
                        {
                            data.comments.map(item => (
                                <Box key={ item.id }>
                                    <HStack>
                                        <Avatar src={ item.createdUserImg } />
                                        <Heading size='md'>{ item.createdUser }</Heading>
                                        <Text>{ item.createdAt }</Text>
                                        <Text>❤ { item.like }</Text>
                                    </HStack>
                                    <Text ml='57px'>{ item.content }</Text>
                                </Box>
                            ))
                        }
                    </VStack>
                </VStack>
            </VStack>
        </>
    )
}