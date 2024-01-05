import { Box, Button, Card, CardBody, Divider, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react";
import database from "../Firebase";
import { collection, query, getDocs, orderBy, where } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "context/authContext";
import dayjs from "dayjs";

interface PostItem {
    id: string;
    title: string;
    tags?: string[];
    content: string;
    preview?: string;
    createdAt: string;
    updatedAt: string;
    image?: string;
    tempYn?: boolean;
}

export const PostList = () => {
    // ======================= HOOK =======================
    const navigate = useNavigate();
    const userInfo = useContext(AuthContext);
    useEffect(() => {
        setPostList([]);
        fetchData();
    },[])
    
    // ======================= VARIABLES =======================
    const [postList, setPostList] = useState<PostItem[]>([]);

    // ======================= METHOD =======================


    const fetchData = () => {
        let dataList: PostItem[] = [];
        const q = query(
            collection(database, "board")
            , where("useYn", "==", "Y")
            , where("tempYn", "==", false)
            , orderBy("createdAt", "desc")
        )
        getDocs(q).then( (querySnapshot)=>{
            querySnapshot.forEach((doc) => {
                const data: PostItem = {
                    id: doc.id,
                    title: doc.data().title,
                    tags: doc.data().tags || [],
                    content: doc.data().content,
                    preview: doc.data().preview,
                    createdAt: dayjs(doc.data().createdAt.toDate()).format('YYYY-MM-DD HH:mm'),
                    updatedAt: dayjs(doc.data().updatedAt.toDate()).format('YYYY-MM-DD HH:mm'),
                    image: doc.data().image || '',
                    tempYn: doc.data().tempYn || '',
                };
                dataList.push(data);
                setPostList(dataList);
            })
        })
    }

    // 게시글 리스트 렌더링
    const ItemList = postList.map((item: PostItem) => (
        <Link to={`/post/${item.id}`} key={item.id}>
        <Card maxW='300px' className="postListItem" key={item.id}>
                <CardBody>
                    <Image
                        fit={"cover"}
                        src={item.image || 'https://picsum.photos/id/1/500'}
                        borderRadius='lg'
                        style={{height: '150px'}}
                        boxSize={'230px'}
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{item.title}</Heading>
                        {/* <Box h={'70px'}>
                            <Text className="postListItemContent">
                                {item.preview}
                            </Text>
                        </Box> */}
                        <Divider />
                        <Text>{item.createdAt}
                            {/* <span className="postListItemView">👁 {item.view} ❤ {item.like}</span> */}
                        </Text>
                    </Stack>
                </CardBody>
        </Card>
            </Link >
    ));

    // ======================= JSX =======================
    return (
        <>
            {userInfo &&
                <Box m='10px 0'>
                    <Button colorScheme="blue" variant={"outline"} onClick={()=>navigate('/posting')}>게시글 작성</Button>
                </Box>
            }
            <Grid m='20px 0' templateColumns='repeat(4, 1fr)' gap={3}>
                { ItemList }
            </Grid>
        </>
    )
}