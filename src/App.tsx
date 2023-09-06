
import './style/App.css';
import { ChakraProvider } from '@chakra-ui/react'
import {
  Avatar, Center, Box, Grid, GridItem, Input, Button,
  Menu, MenuButton, MenuIcon, MenuItem, MenuList, MenuGroup, MenuDivider, HStack
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

import { blogMenuList, BlogMenu, BlogMenuType } from './data/menu';


function App() {


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
                      <MenuItem key={bottomItem.menuId}>{bottomItem.menuNm}</MenuItem>
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
    <ChakraProvider>
      <Center>
        <Grid
        width={1540}
        templateAreas={`"header"
                        "main"
                        "footer"`}
        gridTemplateRows={'80px 10fr 60px'}
        h='100vh'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        {/* =========== Header =========== */}
        <GridItem pl='2' bg='white' area={'header'}>
          <Grid templateColumns='200px 3fr 250px 100px' gap={6}>
            <Center h='80px'>
              <h1>🤍 Sujin&apos;s Study Blog</h1>
            </Center>
              <HStack spacing='24px'>
                { menuList }
              {/* <Menu>
                <MenuButton
                  as={Button}
                  colorScheme='white'
                  variant='ghost'
                  rightIcon={<ChevronDownIcon />}
                  _hover={{ color: 'gray.400' }}
                  _expanded={{ color: 'blue.400' }}
                  _focus={{ color: 'outline' }}>
                  메뉴 1
                </MenuButton>
                <MenuList>
                  <MenuItem>세부메뉴</MenuItem>
                  <MenuItem>세부메뉴</MenuItem>
                  <MenuDivider />
                  <MenuItem>세부메뉴</MenuItem>
                  <MenuItem>세부메뉴</MenuItem>
                </MenuList>
              </Menu>
                
              <Menu>
                <MenuButton
                  as={Button}
                  colorScheme='white'
                  variant='ghost'
                  rightIcon={<ChevronDownIcon />}
                  _hover={{ color: 'gray.400' }}
                  _expanded={{ color: 'blue.400' }}
                  _focus={{ color: 'outline' }}>
                  메뉴 2
                </MenuButton>
                <MenuList>
                  <MenuItem>세부메뉴</MenuItem>
                  <MenuItem>세부메뉴</MenuItem>
                  <MenuDivider />
                  <MenuItem>세부메뉴</MenuItem>
                  <MenuItem>세부메뉴</MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton
                  as={Button}
                  colorScheme='white'
                  variant='ghost'
                  rightIcon={<ChevronDownIcon />}
                  _hover={{ color: 'gray.400' }}
                  _expanded={{ color: 'blue.400' }}
                  _focus={{ color: 'outline' }}>
                  메뉴 3
                </MenuButton>
                <MenuList>
                  <MenuItem>세부메뉴</MenuItem>
                  <MenuItem>세부메뉴</MenuItem>
                  <MenuDivider />
                  <MenuItem>세부메뉴</MenuItem>
                  <MenuItem>세부메뉴</MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton
                  as={Button}
                  colorScheme='white'
                  variant='ghost'
                  rightIcon={<ChevronDownIcon />}
                  _hover={{ color: 'gray.400' }}
                  _expanded={{ color: 'blue.400' }}
                  _focus={{ color: 'outline' }}>
                  메뉴 4
                </MenuButton>
                <MenuList>
                  <MenuItem>세부메뉴</MenuItem>
                  <MenuItem>세부메뉴</MenuItem>
                  <MenuDivider />
                  <MenuItem>세부메뉴</MenuItem>
                  <MenuItem>세부메뉴</MenuItem>
                </MenuList>
              </Menu> */}
            </HStack>
            <Center h='80px'>
              <Input variant={'flushed'} size={'sm'}></Input>
              <Button variant={'outline'} size={'sm'} ml={2}> 검색 </Button>
            </Center>
            <Center h='80px'>
              <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
            </Center>
          </Grid>
        </GridItem>

        {/* =========== Navigation =========== */}
        {/* <GridItem pl='2' area={'nav'}>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    대분류 1
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <Divider />
              <AccordionPanel pb={4}>
                소분류 1
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    대분류 2
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <Divider />
              <AccordionPanel pb={4}>
                소분류 1
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </GridItem> */}

        {/* =========== Main =========== */}
        <GridItem pl='2' bg='green.300' area={'main'}>
              본문
        </GridItem>

        {/* =========== Footer =========== */}
        <GridItem pl='2' area={'footer'}>
            Copyright © SuJin-Shin. All Rights Reserved.<br/>
            {/* E-mail. shinsj5037@gmail.com<br/>
            github. https://github.com/ssj5037 */}
        </GridItem>
        </Grid>
      </Center>
    </ChakraProvider>
  );
}

export default App;
