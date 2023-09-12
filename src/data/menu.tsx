enum BlogMenuType {
    Top = 'top',
    Middle = 'middle',
    Bottom = 'bottom'
};
  
  interface BlogMenu {
    menuId: number;
    menuNm: string;
    menuType: BlogMenuType;
    menuUrl?: string;
    menuSub?: BlogMenu[];
};
  
  const blogMenuList: BlogMenu[] = [
    {
        menuId: 1000,
        menuNm: 'Home',
        menuType: BlogMenuType.Top,
        menuSub: [
            {
                menuId: 1100,
                menuNm: '',
                menuType: BlogMenuType.Middle,
                menuSub: [
                    {
                        menuId: 1100,
                        menuNm: 'Introduce',
                        menuUrl: '/introduce',
                        menuType: BlogMenuType.Bottom,
                    }
                ]
            }
        ]
    },
    {
        menuId: 2000,
        menuNm: 'Web',
        menuType: BlogMenuType.Top,
        menuSub: [
           {
                menuId: 2100,
                menuNm: 'Language',
                menuType: BlogMenuType.Middle,
                menuSub: [
                    {
                        menuId: 2110,
                        menuNm: 'js',
                        menuUrl: '/js',
                        menuType: BlogMenuType.Bottom,
                    },
                    {
                        menuId: 2120,
                        menuNm: 'ts',
                        menuUrl: '/ts',
                        menuType: BlogMenuType.Bottom,
                    },
                    {
                        menuId: 2130,
                        menuNm: 'Java',
                        menuUrl: '/Java',
                        menuType: BlogMenuType.Bottom,
                    },
                ]
           },
           {
                menuId: 2200,
                menuNm: 'VCS',
                menuType: BlogMenuType.Middle,
                menuSub: [
                    {
                        menuId: 2210,
                        menuNm: 'git',
                        menuUrl: '/git',
                        menuType: BlogMenuType.Bottom,
                    }
                ]
           },
           {
                menuId: 2300,
                menuNm: 'Module Bundler',
                menuType: BlogMenuType.Middle,
                menuSub: [
                    {
                        menuId: 2310,
                        menuNm: 'webpack',
                        menuUrl: '/webpack',
                        menuType: BlogMenuType.Bottom,
                    }
                ]
           },
           {
                menuId: 2400,
                menuNm: 'DB',
                menuType: BlogMenuType.Middle,
                menuSub: [
                    {
                        menuId: 2410,
                        menuNm: 'oracle',
                        menuUrl: '/oracle',
                        menuType: BlogMenuType.Bottom,
                    },
                    {
                        menuId: 2420,
                        menuNm: 'mssql',
                        menuUrl: '/mssql',
                        menuType: BlogMenuType.Bottom,
                    },
                    {
                        menuId: 2430,
                        menuNm: 'mysql',
                        menuUrl: '/mysql',
                        menuType: BlogMenuType.Bottom,
                    },
                    {
                        menuId: 2440,
                        menuNm: 'postgreSql',
                        menuUrl: '/postgreSql',
                        menuType: BlogMenuType.Bottom,
                    },
                ]
           },
        ]
    },
    {
        menuId: 3000,
        menuNm: 'App',
        menuType: BlogMenuType.Top,
    },
    {
        menuId: 4000,
        menuNm: 'Project',
        menuType: BlogMenuType.Top,
        menuSub: [
            {
                menuId: 4100,
                menuNm: 'Public API',
                menuType: BlogMenuType.Middle,
                menuSub: [
                    {
                        menuId: 4110,
                        menuNm: 'FFXIV Api',
                        menuUrl: '/FFXIV',
                        menuType: BlogMenuType.Bottom,
                    }
                ]
            }
        ]
    },
    {
        menuId: 9000,
        menuNm: 'Template',
        menuType: BlogMenuType.Top,
        menuSub: [
            {
                menuId: 9100,
                menuNm: 'Post Template',
                menuType: BlogMenuType.Middle,
                menuSub: [
                    {
                        menuId: 9110,
                        menuNm: 'Posting List',
                        menuUrl: '/templateList',
                        menuType: BlogMenuType.Bottom,
                    },
                    {
                        menuId: 9120,
                        menuNm: 'Post', 
                        menuUrl: '/templatePost',
                        menuType: BlogMenuType.Bottom,
                    }
                ]
            }
        ]
    },
];
  
export {
    blogMenuList, BlogMenuType
}
export type {
    BlogMenu
}
  