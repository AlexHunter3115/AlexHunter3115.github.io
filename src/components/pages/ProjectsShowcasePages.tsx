import React from 'react';
import "../../styles/pagesStyles/showcasePageStyles.css";

import { FilteredDatabase } from '../filterDatabaseComponent';
import { HighlightedProjectsComponents } from '../highlightedProjectsComponents';

export const ShowcasePageComponent: React.FC = () => {

  const [state, setState] = React.useState<number>(0);

  const onStateChange = (newState: number) => {

    if ( state === newState ) {
      return;
    }

    setState(newState);
  };

  return (
    <div className='showcase-container'>

      {state === 0 && <HighlightedProjectsComponents onStateChange={onStateChange} />}
      {state === 1 && <FilteredDatabase onStateChange={onStateChange} />}

      {/* <FilteredDatabase /> */}
      {/* <HighlightedProjectsComponents /> */}
    </div>
  );
};