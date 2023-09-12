
import { ChakraProvider, Avatar, Center, Grid, GridItem, Input, Button,
  Menu, MenuButton, MenuItem, MenuList, MenuGroup, HStack, IconButton
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';

import { blogMenuList, BlogMenu } from '../data/menu';
import { Outlet, Link  } from 'react-router-dom';
import theme from 'style/theme';
import Fonts from 'style/Fonts';

export const Layout = () => {
    
  const menuList = blogMenuList.map((item: BlogMenu) => (
    <Menu
    key={item.menuId}>
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
          item.menuSub?.map((middleItem: BlogMenu) => {
            return (
              <MenuGroup
                key={middleItem.menuId}
                title={middleItem.menuNm}>
                {
                  middleItem.menuSub?.map((bottomItem: BlogMenu) => {
                    return (
                        <MenuItem
                            key={bottomItem.menuId}>
                            <Link to={`${bottomItem.menuUrl}`}>
                                {bottomItem.menuNm}
                            </Link>
                        </MenuItem>
                    )
                  })
                }
              </MenuGroup>
            )
          })
        }
      </MenuList>
    </Menu>
  ));


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
              <Grid templateColumns='200px 3fr 250px 100px' gap={6}>
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
                  <Avatar src='/image/avatar1.jpg' />
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