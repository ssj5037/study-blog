
import { ChakraProvider, Center, Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import theme from 'style/theme';
import Fonts from 'style/Fonts';
import Footer from './Footer';
import Header from './Header';

export const Layout = () => {

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
                <Header />
              </GridItem>
      
              {/* =========== Main =========== */}
              <GridItem pl='2' area={'main'}>
                <div className="main-inner">
                  <Outlet />
                </div>
              </GridItem>
      
              {/* =========== Footer =========== */}
              <GridItem pl='2' area={'footer'} borderTop='1px' borderColor='blackAlpha.200'>
                <Footer />
              </GridItem>
            </Grid>
          </div>
        </Center>
      </ChakraProvider>
    )
}