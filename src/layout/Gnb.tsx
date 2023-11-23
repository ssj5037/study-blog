
import { Box, Button, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react';
import { blogMenuList, BlogMenu } from '../data/menu';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Gnb = () => {
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
                {'menuSub' in item ? existSub : notExistSub}
            </Menu>
        )
    }
    )
    return <> { menuList }</>
};

export default Gnb;