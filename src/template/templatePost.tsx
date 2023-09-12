import { Avatar, Box, Button, ButtonGroup, Divider, Flex, HStack, Heading, Spacer, Stack, Tag, Text, Textarea, VStack } from "@chakra-ui/react"

export const TemplatePost = () => {
    return (
        <>
            <ButtonGroup m='10px 0' spacing="3" variant={"outline"}>
                <Button colorScheme="blue">수정</Button>
                <Button colorScheme="red">삭제</Button>
            </ButtonGroup>
            <VStack spacing={8} m='20px 0' align='stretch'>
                <VStack>
                    <Heading size='2xl'>제목 입니다 뭐라고요?</Heading>
                    <HStack spacing={4}>
                        <Text>2023년 9월 12일</Text>
                        <Text>👁 200 ❤ 10</Text>
                    </HStack>
                </VStack>
                <HStack>
                    <Heading fontSize='xl'>태그</Heading>
                    <Tag size="lg" variant="solid" colorScheme="blue">태그1</Tag>
                    <Tag size="lg" variant="solid" colorScheme="blue">태그1</Tag>
                    <Tag size="lg" variant="solid" colorScheme="blue">태그1</Tag>
                    <Tag size="lg" variant="solid" colorScheme="blue">태그1</Tag>
                    <Tag size="lg" variant="solid" colorScheme="blue">태그1</Tag>
                    <Tag size="lg" variant="solid" colorScheme="blue">태그1</Tag>
                </HStack>
                <Text fontSize='xl'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, quasi doloremque magnam aperiam tenetur eum eveniet, neque similique illo maiores accusantium unde. Natus deserunt laboriosam, voluptates doloremque nulla consectetur facilis.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, quasi doloremque magnam aperiam tenetur eum eveniet, neque similique illo maiores accusantium unde. Natus deserunt laboriosam, voluptates doloremque nulla consectetur facilis.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, quasi doloremque magnam aperiam tenetur eum eveniet, neque similique illo maiores accusantium unde. Natus deserunt laboriosam, voluptates doloremque nulla consectetur facilis.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, quasi doloremque magnam aperiam tenetur eum eveniet, neque similique illo maiores accusantium unde. Natus deserunt laboriosam, voluptates doloremque nulla consectetur facilis.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, quasi doloremque magnam aperiam tenetur eum eveniet, neque similique illo maiores accusantium unde. Natus deserunt laboriosam, voluptates doloremque nulla consectetur facilis.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, quasi doloremque magnam aperiam tenetur eum eveniet, neque similique illo maiores accusantium unde. Natus deserunt laboriosam, voluptates doloremque nulla consectetur facilis.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, quasi doloremque magnam aperiam tenetur eum eveniet, neque similique illo maiores accusantium unde. Natus deserunt laboriosam, voluptates doloremque nulla consectetur facilis.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, quasi doloremque magnam aperiam tenetur eum eveniet, neque similique illo maiores accusantium unde. Natus deserunt laboriosam, voluptates doloremque nulla consectetur facilis.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, quasi doloremque magnam aperiam tenetur eum eveniet, neque similique illo maiores accusantium unde. Natus deserunt laboriosam, voluptates doloremque nulla consectetur facilis.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, quasi doloremque magnam aperiam tenetur eum eveniet, neque similique illo maiores accusantium unde. Natus deserunt laboriosam, voluptates doloremque nulla consectetur facilis.
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
                            <HStack>
                                <Avatar src={`${process.env.PUBLIC_URL}/image/avatar1.jpg`} />
                                <Heading size='md'>{`신수진(ssj5037)`}</Heading>
                            </HStack>
                            <HStack>
                                <Textarea ml='57px' placeholder='댓글을 작성해주세요' size='sm' resize='none'></Textarea>
                                <Button colorScheme="blue" variant="ghost">작성</Button>
                            </HStack>
                        </Box>
                        <Divider />
                        <Box>
                            <HStack>
                                <Avatar src={`${process.env.PUBLIC_URL}/image/avatar1.jpg`} />
                                <Heading size='md'>{`신수진(ssj5037)`}</Heading>
                                <Text>2023년 9월 13일 10:00:00</Text>
                                <Text>❤ 10</Text>
                            </HStack>
                            <Text ml='57px'>댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.
                                댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.
                                댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.
                                댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.
                                댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.
                                댓글입니다.댓글입니다.</Text>
                        </Box>
                        <Box>
                            <HStack>
                                <Avatar src={`${process.env.PUBLIC_URL}/image/avatar1.jpg`} />
                                <Heading size='md'>{`신수진(ssj5037)`}</Heading>
                                <Text>2023년 9월 13일 10:00:00</Text>
                                <Text>❤ 10</Text>
                            </HStack>
                            <Text ml='57px'>댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.
                                댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.
                                댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.
                                댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.
                                댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.
                                댓글입니다.댓글입니다.</Text>
                        </Box>
                        <Box>
                            <HStack>
                                <Avatar src={`${process.env.PUBLIC_URL}/image/avatar1.jpg`} />
                                <Heading size='md'>{`신수진(ssj5037)`}</Heading>
                                <Text>2023년 9월 13일 10:00:00</Text>
                                <Text>❤ 10</Text>
                            </HStack>
                            <Text ml='57px'>댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.
                                댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.
                                댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.
                                댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.
                                댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.
                                댓글입니다.댓글입니다.</Text>
                        </Box>
                    </VStack>
                </VStack>
            </VStack>
        </>
    )
}