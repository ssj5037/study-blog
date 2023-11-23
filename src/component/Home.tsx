import { Box, Grid, GridItem, HStack, Heading, Image, Link, Text, VStack } from "@chakra-ui/react"

export const Home = () => {
    return (
        <>
            <Grid
                id="HomeGrid"
                // h='900px'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(10, 1fr)'
                gap={10}
            >
                <GridItem colSpan={3} >
                    <img src={`${process.env.PUBLIC_URL}/image/home1.jpg`} height='350px'></img>
                </GridItem>
                <GridItem colSpan={3} >
                    <img src={`${process.env.PUBLIC_URL}/image/home2.jpg`}></img>
                </GridItem>
                <GridItem colSpan={4} rowSpan={2} textAlign='left' >
                    <Box mt='20'>
                        <VStack>
                            <Text fontSize='md'>웹 풀스택 개발자</Text>
                            <Heading size='3xl'>신 수 진</Heading>
                        </VStack>
                    </Box>
                    <Box mt='20'>
                        <Heading fontSize='xl'>비즈앤플랫폼(2023.04 ~ 2023.06) - 프론트엔드 개발자</Heading>
                        <Text fontSize='lg'>중소기업형 렌터카 사업체를 위한 자동차 대여 시스템 프론트엔드 개발 업무 담당.</Text>
                        <Text fontSize='lg'>일부 백엔드 업무도 수행하였음.</Text>
                    </Box>
                    <Box mt='8'>
                        <Heading fontSize='xl'>크로니즈시스템(2020.10 ~ 2023.03) - 풀스택 개발자</Heading>
                        <Text fontSize='lg'>MES 시스템, Smart Farm시스템 개발 및 설계 업무 담당.</Text>
                    </Box>
                    <HStack mt='8'>
                        <Link href="https://github.com/ssj5037" isExternal >
                            <Image src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg" />
                        </Link>
                    </HStack>
                </GridItem>

                <GridItem colSpan={3} >
                    <img src={`${process.env.PUBLIC_URL}/image/home3.jpg`}></img>
                </GridItem>
                <GridItem colSpan={3} >
                    <img src={`${process.env.PUBLIC_URL}/image/home4.jpg`}></img>
                </GridItem>
            </Grid>
        </>
    )
}