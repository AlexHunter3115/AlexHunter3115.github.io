import React, { useEffect } from 'react';
import "../../styles/pagesStyles/showcasePageStyles.css";
import "../../styles/cardStyle.css";
import cardsData from "../../data/cardsData.json";

type CardData = {
  URL: string;
  Title: string;
  Text: string;
  Langs: string[];
};

enum Selection {
  WANTED,
  UNWANTED,
  DEFAULT
}

export const ShowcasePageComponent: React.FC = () => {


  const [arrayOfBools, setArrayOfBools] = React.useState<Selection[]>(
    Array(17).fill(Selection.DEFAULT)
  );

  const [selectedCards, setSelectedCards] = React.useState<CardData[]>([]);

  const toggleBoolAtIndex = (index: number) => {
    setArrayOfBools((prevArray) => {
      const newArray = [...prevArray];
      const currentSelection = newArray[index];

      switch (currentSelection) {
        case Selection.WANTED:
          newArray[index] = Selection.UNWANTED;
          break;
        case Selection.UNWANTED:
          newArray[index] = Selection.DEFAULT;
          break;
        case Selection.DEFAULT:
          newArray[index] = Selection.WANTED;
          break;
        default:
          break;
      }

      return newArray;
    });
  };


  useEffect(() => {
    const updatedCards: CardData[] = [];

    Object.values(cardsData).forEach((card: CardData) => {

      let state = 0;

      const shouldIncludeCard = card.Langs.some(lang => {
        const langIndex = getLangIndex(lang);
        if (arrayOfBools[langIndex] === Selection.UNWANTED) 
        {
          state = 2;
          return;
        }

        if (arrayOfBools[langIndex] === Selection.WANTED) 
        {
          state = 1;
        }
      });

      if (state === 1) {
        updatedCards.push(card);
      }
    });

    setSelectedCards(updatedCards);
  }, [arrayOfBools]);


  // this is the index of the array
  const getLangIndex = (lang: string): number => {
    switch (lang) {
      case 'Highlighted':
        return 0;
      case 'js':
        return 1;
      case 'css':
        return 2;
      case 'rust':
        return 3;
      case 'c#':
        return 4;
      case 'c++':
        return 5;
      case 'cairo':
        return 6;
      case 'python':
        return 7;
      case 'react':
        return 8;
      case 'unreal':
        return 9;
      case 'unity':
        return 10;
      case 'bevy':
        return 11;
      case 'UY1':
        return 12;
      case 'UY2':
        return 13;
      case 'UY3':
        return 14;
      case 'GJ':
        return 15;
      case 'PP':
        return 16;
      default:
        return -1;
    }
  };

  useEffect(() => { console.log(selectedCards) }, [selectedCards]);

  return (
    <div className='showcase-container'>
      <div className='showcase-title-container'>Look Through Database</div>
      <div className='showcase-filter-container'>
        <div className='filter-container'>
          <div className='filter-container-title'>Language/Engines</div>
          <div className='filter-button-grid'>
            <div className='filter-button' onMouseDown={() => toggleBoolAtIndex(1)} style={{ backgroundColor: arrayOfBools[1] === Selection.WANTED ? 'green' : arrayOfBools[11] === Selection.UNWANTED ? 'red' : 'grey' }}>JS/TS</div>
            <div className='filter-button' onMouseDown={() => toggleBoolAtIndex(2)} style={{ backgroundColor: arrayOfBools[2] === Selection.WANTED ? 'green' : arrayOfBools[2] === Selection.UNWANTED ? 'red' : 'grey' }}>HTML/CSS</div>
            <div className='filter-button' onMouseDown={() => toggleBoolAtIndex(3)} style={{ backgroundColor: arrayOfBools[3] === Selection.WANTED ? 'green' : arrayOfBools[3] === Selection.UNWANTED ? 'red' : 'grey' }}>RUST</div>
            <div className='filter-button' onMouseDown={() => toggleBoolAtIndex(4)} style={{ backgroundColor: arrayOfBools[4] === Selection.WANTED ? 'green' : arrayOfBools[4] === Selection.UNWANTED ? 'red' : 'grey' }}>C#</div>
            <div className='filter-button' onMouseDown={() => toggleBoolAtIndex(5)} style={{ backgroundColor: arrayOfBools[5] === Selection.WANTED ? 'green' : arrayOfBools[5] === Selection.UNWANTED ? 'red' : 'grey' }}>C++</div>
            <div className='filter-button' onMouseDown={() => toggleBoolAtIndex(6)} style={{ backgroundColor: arrayOfBools[6] === Selection.WANTED ? 'green' : arrayOfBools[6] === Selection.UNWANTED ? 'red' : 'grey' }}>CAIRO</div>
            <div className='filter-button' onMouseDown={() => toggleBoolAtIndex(7)} style={{ backgroundColor: arrayOfBools[7] === Selection.WANTED ? 'green' : arrayOfBools[7] === Selection.UNWANTED ? 'red' : 'grey' }}>PYTHON</div>
            <div className='filter-button' onMouseDown={() => toggleBoolAtIndex(8)} style={{ backgroundColor: arrayOfBools[8] === Selection.WANTED ? 'green' : arrayOfBools[8] === Selection.UNWANTED ? 'red' : 'grey' }}>REACT</div>
            <div className='filter-button' onMouseDown={() => toggleBoolAtIndex(9)} style={{ backgroundColor: arrayOfBools[9] === Selection.WANTED ? 'green' : arrayOfBools[9] === Selection.UNWANTED ? 'red' : 'grey' }}>UNREAL</div>
            <div className='filter-button' onMouseDown={() => toggleBoolAtIndex(10)} style={{ backgroundColor: arrayOfBools[10] === Selection.WANTED ? 'green' : arrayOfBools[10] === Selection.UNWANTED ? 'red' : 'grey' }}>UNITY</div>
            <div className='filter-button' onMouseDown={() => toggleBoolAtIndex(11)} style={{ backgroundColor: arrayOfBools[11] === Selection.WANTED ? 'green' : arrayOfBools[11] === Selection.UNWANTED ? 'red' : 'grey' }}>BEVY</div>
          </div>
        </div>
        <div className='filter-container'>
          <div className='filter-container-title'>Language/Engines</div>
          <div className='filter-button-grid'>
            <div className='filter-button' onMouseDown={() => toggleBoolAtIndex(12)} style={{ backgroundColor: arrayOfBools[12] === Selection.WANTED ? 'green' : arrayOfBools[12] === Selection.UNWANTED ? 'red' : 'grey' }}>UNI YEAR 1</div>
            <div className='filter-button' onMouseDown={() => toggleBoolAtIndex(13)} style={{ backgroundColor: arrayOfBools[13] === Selection.WANTED ? 'green' : arrayOfBools[13] === Selection.UNWANTED ? 'red' : 'grey' }}>UNI YEAR 2</div>
            <div className='filter-button' onMouseDown={() => toggleBoolAtIndex(14)} style={{ backgroundColor: arrayOfBools[14] === Selection.WANTED ? 'green' : arrayOfBools[14] === Selection.UNWANTED ? 'red' : 'grey' }}>UNI YEAR 3</div>
            <div className='filter-button' onMouseDown={() => toggleBoolAtIndex(15)} style={{ backgroundColor: arrayOfBools[15] === Selection.WANTED ? 'green' : arrayOfBools[15] === Selection.UNWANTED ? 'red' : 'grey' }}>GAME JAMS</div>
            <div className='filter-button' onMouseDown={() => toggleBoolAtIndex(16)} style={{ backgroundColor: arrayOfBools[16] === Selection.WANTED ? 'green' : arrayOfBools[16] === Selection.UNWANTED ? 'red' : 'grey' }}>PERSONAL PROJECTS</div>
          </div>
        </div>
        <div className='filter-container'>
          <div className='filter-container-grid'>
            <div className='filter-button' onMouseDown={() => setSelectedCards([])}>RESTART</div>
            <div className='filter-button' onMouseDown={() => toggleBoolAtIndex(0)} style={{ backgroundColor: arrayOfBools[0] === Selection.WANTED ? 'green' : arrayOfBools[0] === Selection.UNWANTED ? 'red' : 'grey' }}>HIGHLIGTHED PROJECTS</div>
          </div>
        </div>
      </div>
      <div className='showcase-list-container'>
        <div className='showcase-list-grid'>
          {selectedCards.map((card, index) => (
            <div className='info-card-grid'>
              <div style={{ backgroundColor: "green", gridRow: "span 5" }}>{card.Langs} langs</div>
              <div style={{ backgroundColor: "yellow", gridRow: "span 6" }}>{card.URL} url</div>
              <div style={{ backgroundColor: "blue", gridRow: "span 3" }}>{card.Text} text</div>
              <div style={{ backgroundColor: "red", gridRow: "span 2" }}>{card.Title} title</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};