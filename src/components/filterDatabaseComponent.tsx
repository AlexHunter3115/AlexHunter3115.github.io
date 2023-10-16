
import React, { useEffect } from 'react';

import "../App.css";
import "../styles/cardStyle.css";
import "../styles/wholeFilterDatabaseStyles.css";

import cardsData from "../data/cardsData.json";

enum Selection {
  WANTED,
  UNWANTED,
  DEFAULT
}

type CardData = {
  URL: string;
  Title: string;
  Text: string;
  Langs: string[];
};

const svgArray = [ "https://www.svgrepo.com/show/405753/green-square.svg", "https://www.svgrepo.com/show/407320/red-square.svg", "https://www.svgrepo.com/show/532287/square.svg" ]

interface FilteredDBProps {
  onStateChange: (newState: number) => void;
}

export const FilteredDatabase: React.FC<FilteredDBProps> = ({ onStateChange }) => {

  const [arrayOfStates, setArrayOfStates] = React.useState<Selection[]>(
    Array(17).fill(Selection.DEFAULT)
  );

  const [selectedCards, setSelectedCards] = React.useState<CardData[]>([]);

  const toggleBoolAtIndex = (index: number) => {
    setArrayOfStates((prevArray) => {
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
        if (arrayOfStates[langIndex] === Selection.UNWANTED) {
          state = 2;
          return;
        }

        if (arrayOfStates[langIndex] === Selection.WANTED) {
          state = 1;
        }
      });

      if (state === 1) {
        updatedCards.push(card);
      }
    });

    console.log(updatedCards);

    setSelectedCards(updatedCards);
  }, [arrayOfStates]);


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
    <>
      <div className='upper-container'>
        <div className='button-upper-container' onMouseDown={() => onStateChange(0)}>test button</div>
      </div>
      <div className='lower-container'>


          <div className='list-container'>
            <div className='list-container-title'>This si a title</div>


            <div className='list-background'>


              <div className='list-option'>
                <div className='list-option-title'>Languages</div>
                <div className='list-something'>

                  <div className='list-element-container'>
                    <img src={svgArray[ Number(arrayOfStates[8])]} onMouseDown={() => {toggleBoolAtIndex(8)}} />
                    <h4>React</h4>
                  </div>

                  <div className='list-element-container'>
                    <img src={svgArray[ Number(arrayOfStates[1])]} onMouseDown={() => {toggleBoolAtIndex(1)}} />
                    <h4>JS</h4>
                  </div>

                  <div className='list-element-container'>
                    <img src="discord.svg" alt="GitHub Logo" />
                    <h4>This is a test</h4>
                  </div>

                  <div className='list-element-container'>
                    <img src="discord.svg" alt="GitHub Logo" />
                    <h4>This is a test</h4>
                  </div>

                  <div className='list-element-container'>
                    <img src="discord.svg" alt="GitHub Logo" />
                    <h4>This is a test</h4>
                  </div>

                  <div className='list-element-container'>
                    <img src="discord.svg" alt="GitHub Logo" />
                    <h4>This is a test</h4>
                  </div>

                </div>
              </div>

            </div>



            <div className='filter-button'>restart</div>
            <div className='filter-button'>highlited</div>
          </div>

          <div className='cards-container '>
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
    </>
  );
};




{/* <div className='showcase-list-grid'>
{selectedCards.map((card, index) => (
  <div className='info-card-grid'>
    <div style={{ backgroundColor: "green", gridRow: "span 5" }}>{card.Langs} langs</div>
    <div style={{ backgroundColor: "yellow", gridRow: "span 6" }}>{card.URL} url</div>
    <div style={{ backgroundColor: "blue", gridRow: "span 3" }}>{card.Text} text</div>
    <div style={{ backgroundColor: "red", gridRow: "span 2" }}>{card.Title} title</div>
  </div>
))}
</div> */}