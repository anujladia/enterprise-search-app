import { useContext, useEffect, useState } from 'react';
import {
  SimpleGrid, Skeleton,
} from '@chakra-ui/react';
import AppCard from '@/components/AppCard';

import { MainStateContext } from '@/state-management';

const ConnectedApp = () => {
  const state = useContext(MainStateContext);
  const [appsData, setAppsData] = useState(null);

  useEffect(() => {
    const apps = state.apps;
    const _apps = Object.keys(apps).map(id => ({
      id,
      ...apps[id],
    }));

    setAppsData(_apps);
  }, []);
  
  return (
    <SimpleGrid
      w='80%'
      m='auto'
      spacing={8}
      templateColumns='repeat(auto-fill, minmax(40%, 1fr))'
    >
      {!appsData
        ? [1, 2, 3, 4].map(i => (
          <Skeleton key={`skel-${i}`} isLoaded='false'>
            <AppCard />
          </Skeleton>
        ))
        : appsData.map(app => (
          <AppCard
            key={`${app.id}`}
            {...app}
          />
        ))
      }
    </SimpleGrid>
  );
}

export default ConnectedApp;