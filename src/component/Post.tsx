import { Avatar, Box, Button, ButtonGroup, Divider, Flex, HStack, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Stack, Tag, Text, Textarea, VStack, useDisclosure, useToast } from "@chakra-ui/react"
import { AuthContext } from "context/authContext";
import { useContext, useEffect, useRef, useState } from "react";
import database from "../Firebase";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { dateToString } from "asset/util/date";
import Comment from "./Comment";

interface PostItem {
    id: string;
    title: string;
    tags?: string[];
    content: string;
    preview?: string;
    createdAt: string;
    updatedAt: string;
    image?: string;
    comments?: Comment[];
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


export const Post = () => {
    // ======================= HOOK =======================
    const userInfo = useContext(AuthContext);
    const navigate = useNavigate();
    let { id } = useParams();
    useEffect(() => {
        fetchData();
    }, []);
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();

    // ======================= VARIABLES =======================
    const [post, setPost] = useState<PostItem>();

    // ======================= METHOD =======================    
    const fetchData = async () => {
        if (id) {
            const docSnap = await getDoc(doc(database, "board", id));
    
            if (docSnap.exists()) {
                const data: PostItem = {
                    id: id,
                    title: docSnap.data().title,
                    tags: docSnap.data().tags || [],
                    content: docSnap.data().content,
                    createdAt: dateToString(docSnap.data().createdAt.toDate()),
                    updatedAt: dateToString(docSnap.data().updatedAt.toDate()),
                    image: docSnap.data().image || '',
                };
                setPost(data);
            } else {
                console.log("No such document!");
            }
        }
    }

    const editPost = () => {
        navigate(`/posting/${post?.id}`, { state: post || {} }, );
    }

    const deletePost = async () => {
        if (id) {
            await deleteDoc(doc(database, "board", id));
            onClose();
            toast({
                title: '게시글이 삭제되었습니다.',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            navigate('/post');
        }
    }
    // ======================= JSX =======================
    return (
        <>
            <ButtonGroup m='10px 0' spacing="3" variant={"outline"}>
                <Button colorScheme="blue" onClick={editPost}>수정</Button>
                <Button colorScheme="red" onClick={onOpen}>삭제</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>게시글 삭제</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>정말 삭제하시겠습니까?</ModalBody>
                    <ModalFooter>
                        <Button mr={3} variant='ghost' onClick={onClose}>취소</Button>
                        <Button colorScheme='red' variant='solid' onClick={deletePost}>삭제</Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
            </ButtonGroup>
            <VStack spacing={8} m='20px 0' align='stretch'>
                <VStack>
                    <Heading size='2xl'>{ post?.title }</Heading>
                    <HStack spacing={4}>
                        <Text>{ post?.createdAt }</Text>
                        {/* <Text>👁 {post?.view} ❤ { post?.like}</Text> */}
                    </HStack>
                </VStack>
                <HStack>
                    <Heading fontSize='xl'>태그</Heading>
                    {
                        post?.tags?.map((item, idx) => (
                            <Tag size="lg" borderRadius='full' variant="solid" colorScheme="blue" key={idx}>{ item }</Tag>
                        ))
                    }
                </HStack>
                <Text fontSize='xl'>
                    <img src={post?.image}></img>
                    <div dangerouslySetInnerHTML={{ __html :  post?.content || ''  }} />
                </Text>
                <Flex>
                    <Button colorScheme="grey" variant="ghost" size="lg">{ `< 이전 게시글` }</Button>
                    <Spacer />
                    <Button colorScheme="grey" variant="ghost" size="lg">{`다음 게시글 >`}</Button>
                </Flex>
                <Divider />
                <VStack align='stretch'>
                    <Heading fontSize='xl'>댓글</Heading>
                    <VStack align='stretch' m="10px 50px" spacing={5}>
                        {/* <Box> */}
                            {/* {
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
                        <Divider /> */}
                        <Comment />
                    </VStack>
                </VStack>
            </VStack>
        </>
    )
}