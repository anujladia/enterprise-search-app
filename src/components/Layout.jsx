import { Grid, GridItem } from '@chakra-ui/layout';

import Header from './Header';

const Layout = ({ children }) => {
  return (
    <Grid
      // templateAreas={`'header main'`}
      gridTemplateRows={'auto 1fr'}
      h='100vh'
      w='80vw'
      m='auto'
      gap='8'
      color='blackAlpha.700'
    >
      <GridItem>
        <Header />
      </GridItem>
      <GridItem>
        {children}
      </GridItem>
    </Grid>
  );
};

export default Layout;