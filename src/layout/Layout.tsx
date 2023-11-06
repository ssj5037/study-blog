
import { ChakraProvider, Avatar, Center, Grid, GridItem, Input, Button,
  Menu, MenuButton, MenuItem, MenuList, MenuGroup, HStack, IconButton, MenuDivider, Box, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, ModalFooter, useToast
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';

import { blogMenuList, BlogMenu } from '../data/menu';
import { Outlet, Link  } from 'react-router-dom';
import theme from 'style/theme';
import Fonts from 'style/Fonts';
import { useContext, useRef, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { AuthContext } from 'context/authContext';

export const Layout = () => {

  // 로그인 유저 정보
  const userInfo = useContext(AuthContext);
  // firebase 인증
  const auth = getAuth();
  // 토스트 알람
  const toast = useToast();
  const toastIdRef = useRef<string | number | undefined>();

  /** 로그인 전 */
  const BeforeAuth = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const provider = new GoogleAuthProvider();
    // 구글 로그인
    const getGoogleAuth = () => {
      signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          // const token = credential.accessToken;
          onClose();
          toastIdRef.current = toast({ description: '로그인 되었습니다.' });
        }
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = 'shinsj5037@gmail.com';
        const credential = GoogleAuthProvider.credentialFromError(error);
        toastIdRef.current = toast({
          description:
            `로그인 중 문제가 발생했습니다. 
            (${errorCode}) ${errorMessage} 
            해당 화면을 캡쳐하여 아래 이메일로 문의주세요.
            이메일 : ${email}`
        });
      });
    }

    return (
      <>
        <Button variant={'outline'} onClick={onOpen}>로그인</Button>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>로그인</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Button colorScheme='blue' mr={3} onClick={getGoogleAuth}>
                구글 로그인
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
       
      </>
    )
  };

  /** 로그인 후 */
  const AfterAuth = () => {

    const logOut = () => {
      signOut(auth);
      toastIdRef.current = toast({ description: '로그아웃 되었습니다.' });
    }

    return (
      <Menu>
        <MenuButton>
          <Avatar src={userInfo?.photoURL ? userInfo.photoURL : `${process.env.PUBLIC_URL}/image/no-image.png`} />
        </MenuButton>
        <MenuList>
          <MenuGroup title={userInfo?.displayName + ' (' + userInfo?.email + ')'}>
            {/* <Link to='/mypage'>
                <MenuItem>마이페이지</MenuItem>
              </Link> */}
            <Link to='/setting'>
              <MenuItem>설정</MenuItem>
            </Link>
            <Link to='/like'>
              <MenuItem>좋아요</MenuItem>
            </Link>
              <MenuItem onClick={logOut}>로그아웃</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    )
  };

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
          <div className='layout'>
            <Grid
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
                <div className='header-inner'>
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
                      {/* 인증 o 개인정보 노출, 인증 x 로그인 버튼 노출 */}
                      {
                        userInfo ?
                        <AfterAuth />
                        : <BeforeAuth />
                      }
                      
                    </Center>
                  </Grid>
                </div>
              </GridItem>
      
              {/* =========== Main =========== */}
              <GridItem pl='2' area={'main'}>
                <div className="main-inner">
                  <Outlet />
                </div>
              </GridItem>
      
              {/* =========== Footer =========== */}
              <GridItem pl='2' area={'footer'} borderTop='1px' borderColor='blackAlpha.200'>
                <div className="footer-inner">
                  Copyright © Su-Jin Shin. All Rights Reserved.<br/>
                  {/* E-mail. shinsj5037@gmail.com<br/>
                  github. https://github.com/ssj5037 */}
                </div>
              </GridItem>
            </Grid>
          </div>
        </Center>
      </ChakraProvider>
    )
}