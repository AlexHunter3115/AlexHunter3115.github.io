import React, { useEffect } from 'react';
import "../../styles/pagesStyles/showcasePageStyles.css";

import { FilteredDatabase } from '../filterDatabaseComponent';
import { HighlightedProjectsComponents } from '../highlightedProjectsComponents';

export const ShowcasePageComponent: React.FC = () => {

  const [state, setState] = React.useState<number>(0);

  const onStateChnage = (newState: number) => {

    if ( state === newState ) {
      return;
    }

    setState(newState);
  };

  return (
    <div className='showcase-container'>

      {state === 0 && <HighlightedProjectsComponents onStateChange={onStateChnage} />}
      {state === 1 && <FilteredDatabase onStateChange={onStateChnage} />}

      {/* <FilteredDatabase /> */}
      {/* <HighlightedProjectsComponents /> */}
    </div>
  );
};