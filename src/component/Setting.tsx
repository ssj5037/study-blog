import { Box, Button, Center, Divider, Grid, GridItem, HStack, Heading, Switch, Text, VStack } from "@chakra-ui/react"

export const Setting = () => {
    return (
        <Box maxW='800px' m='50px auto 100px'>
            <Center m='50px 0'>
                <Heading>설정</Heading>
            </Center>
            <Divider />
            <Grid templateColumns='repeat(4, 1fr)' gap={5} m='50px auto 20px'>
                <GridItem colSpan={1}><Heading size='md'>블로그 제목</Heading></GridItem>
                <GridItem colSpan={2}><Text fontSize='lg'>{`🤍 Sujin's Blog`}</Text></GridItem>
                <GridItem colSpan={1}><Button variant='outline' size='sm'>수정</Button></GridItem>
                <GridItem colSpan={4} pb='30px'><Text fontSize='lg'>상단 메뉴 왼쪽에 나타나는 블로그 제목입니다.</Text></GridItem>

                <GridItem colSpan={1}><Heading size='md'>소셜 로그인</Heading></GridItem>
                <GridItem colSpan={2}><Text fontSize='lg'>정보 추가</Text></GridItem>
                <GridItem colSpan={1}><Text fontSize='lg'></Text></GridItem>
                <GridItem colSpan={4} pb='30px'><Text fontSize='lg'>블로그에 연결된 소셜 로그인 정보입니다.</Text></GridItem>

                <GridItem colSpan={1}><Heading size='md'>이메일</Heading></GridItem>
                <GridItem colSpan={2}><Text fontSize='lg'>shinsj5037@gmail.com</Text></GridItem>
                <GridItem colSpan={1}><Button variant='outline' size='sm'>변경</Button></GridItem>
                <GridItem colSpan={4} pb='30px'><Text fontSize='lg'>인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다.</Text></GridItem>

                <GridItem colSpan={1}><Heading size='md'>이메일 수신 설정</Heading></GridItem>
                <GridItem colSpan={3}><HStack><Text fontSize='lg'>댓글 알림</Text><Switch size='md' /></HStack></GridItem>
                <GridItem colSpan={1}></GridItem>
                <GridItem colSpan={3}><HStack><Text fontSize='lg'>블로그 업데이트 소식</Text><Switch size='md' /></HStack></GridItem>
                <GridItem colSpan={4} pb='30px'><Text fontSize='lg'>이메일로 새로운 소식을 받을 지 여부를 설정합니다.</Text></GridItem>

                <GridItem colSpan={1}><Heading size='md'>회원 탈퇴</Heading></GridItem>
                <GridItem colSpan={3}><Button variant='outline' size='sm'>회원 탈퇴</Button></GridItem>
                <GridItem colSpan={4} pb='30px'><Text fontSize='lg'>탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.</Text></GridItem>
            </Grid>
            <Divider />
        </Box>
    )
}