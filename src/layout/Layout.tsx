
import { ChakraProvider, Avatar, Center, Grid, GridItem, Input, Button,
  Menu, MenuButton, MenuItem, MenuList, MenuGroup, HStack, IconButton, MenuDivider, Box
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';

import { blogMenuList, BlogMenu } from '../data/menu';
import { Outlet, Link  } from 'react-router-dom';
import theme from 'style/theme';
import Fonts from 'style/Fonts';

export const Layout = () => {
    
  // 메뉴 목록
  const menuList = blogMenuList.map((item: BlogMenu) => {
    
    // 서브 메뉴가 있는 경우.  (최상위 메뉴 - 중위 메뉴 - 하위 메뉴)
    const existSub = (
      <Box key={item.menuId}>
        {/* 최상위 메뉴 */}
        <MenuButton
          as={Button}
          colorScheme='white'
          variant='ghost'
          rightIcon={<ChevronDownIcon />}
          _hover={{ color: 'gray.400' }}
          _expanded={{ color: 'blue.400' }}
          _focus={{ color: 'outline' }}>
          {item.menuNm}
        </MenuButton>
        <MenuList>
          {
            item.menuSub?.map((middleItem: BlogMenu, index: number) => {
              return (
                <Box key={middleItem.menuId}>
                  {/* 중위 메뉴 */}
                  <MenuGroup
                    title={middleItem.menuNm}>
                    {
                      middleItem.menuSub?.map((bottomItem: BlogMenu) => {
                        return (
                          // 하위 메뉴
                          <Link to={`${bottomItem.menuUrl}`} key={bottomItem.menuId}>
                            <MenuItem>
                              {bottomItem.menuNm}
                            </MenuItem>
                          </Link>
                        )
                      })
                    }
                  </MenuGroup>
                  {/* 중위 메뉴 간 구분자 */}
                  {item.menuSub?.length !== index + 1 ? (<MenuDivider />) : (<></>)}
                </Box>
              )
            })
          }
        </MenuList>
      </Box>
    )

    // 서브 메뉴가 없는 경우. (최상위 메뉴만 존재함)
    const notExistSub = (
      // 최상위 메뉴
      <Link to={`${item.menuUrl}`} key={item.menuId}>
        <MenuButton
          as={Button}
          colorScheme='white'
          variant='ghost'
          // rightIcon={<ChevronDownIcon />}
          _hover={{ color: 'gray.400' }}
          _expanded={{ color: 'blue.400' }}
          _focus={{ color: 'outline' }}>
          {item.menuNm}
        </MenuButton>
      </Link>
    )

    return (
      <Menu key={item.menuId}>
        { 'menuSub' in item ? existSub : notExistSub }
      </Menu>
    )
  }
);

    return (
      <ChakraProvider theme={theme}>
        <Fonts />
        <Center>
          <Grid
          width={1540}
          templateAreas={`"header"
                          "main"
                          "footer"`}
          gridTemplateRows={'80px 10fr 60px'}
          gap='1'
          color='blackAlpha.700'
          fontWeight='bold'
          >
            {/* =========== Header =========== */}
            <GridItem pl='2' bg='white' area={'header'} borderBottom='1px' borderBottomColor='blackAlpha.200'>
              <Grid templateColumns='1fr 3fr 0.8fr 0.5fr' gap={6}>
                <Center h='80px'>
                  <Link to="/">
                    <h1>🤍 Sujin&apos;s Blog </h1>
                  </Link>
                </Center>
                <HStack spacing='24px'>
                  { menuList }
                </HStack>
                <Center h='80px'>
                  <Input variant={'flushed'} size={'sm'}></Input>
                <IconButton
                    variant='outline'
                    size={'sm'} ml={2}
                    aria-label='Call Sage'
                    fontSize='20px'
                    icon={<SearchIcon />}
                />
                  {/* <Button variant={'outline'} size={'sm'} ml={2}> 검색 </Button> */}
                </Center>
                <Center h='80px'>

                  <Menu>
                    <MenuButton>
                      <Avatar src={`${process.env.PUBLIC_URL}/image/avatar1.jpg`} />
                    </MenuButton>
                    <MenuList>
                      <MenuGroup title={ `신수진 (ssj5037)` }>
                          {/* <Link to='/mypage'>
                            <MenuItem>마이페이지</MenuItem>
                          </Link> */}
                          <Link to='/setting'>
                            <MenuItem>설정</MenuItem>
                          </Link>
                          <Link to='/like'>
                            <MenuItem>좋아요</MenuItem>
                          </Link>
                          <MenuItem>로그아웃</MenuItem>
                      </MenuGroup>
                    </MenuList>
                  </Menu>
                  
                </Center>
              </Grid>
            </GridItem>
    
            {/* =========== Main =========== */}
            <GridItem pl='2' area={'main'}>
              <Outlet />
            </GridItem>
    
            {/* =========== Footer =========== */}
            <GridItem pl='2' area={'footer'}>
              Copyright © Su-Jin Shin. All Rights Reserved.<br/>
              {/* E-mail. shinsj5037@gmail.com<br/>
              github. https://github.com/ssj5037 */}
            </GridItem>
          </Grid>
        </Center>
      </ChakraProvider>
    )
}