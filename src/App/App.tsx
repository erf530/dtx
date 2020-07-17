import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { PermutationContainer } from '../PermutationContainer/PermutationContainer';
import { DataProps } from '../types';
import styled, { css } from 'styled-components/macro';

const buttonContainer = css`
  height: 200px;
  margin: 40px;
`
const buttonStyle = css`
  background-color: white;
  color: black;
  border: none;
  font-size: 24px;
  width: 100px;
  height: 50px;
  border-radius: 15px;

  &:hover, &:disabled {
    opacity: .7;
  }
`
const errorMessage = css`
  font-size: 10px;
  font-style: italic;
  color: red;
`

const App: React.FC = () => {
  const [mockData, setMockData] = useState<DataProps[]>([]);
  const [isError, setError] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<string>('Select');


  const toggleSelected = (id: string) => {
    const newMock = mockData.map(permutation => {
      if (id === permutation.id) {
        return {
          ...permutation,
          selected: !permutation.selected
        }
      } else {
        return permutation
      }
    })
    setMockData(newMock)
  }

  const formatMockData = (data: DataProps[]) => {
    return data.map((permutation: DataProps) => {
      return {
        ...permutation,
        selected: false
      }
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      try {
        //  Quick solve for CORS error: https://stackoverflow.com/a/53977372
        const { data } = await axios.get('https://cors-anywhere.herokuapp.com/https://flowcode.com/mock-api-data');

        // Adds selected boolean to object
        const formattedData = formatMockData(data)
        setMockData(formattedData);

      } catch (error) {
        console.log(error);
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const isViewPage = page === 'View';
  const isSelectPage = page === 'Select';
  const noPermutationsSelected = !mockData.filter(permutation => permutation.selected).length;
  const selected = mockData.filter(permutation => permutation.selected)


  return (
    <div className="App">
      <header className="App-header">
        {isError && <p css={errorMessage}> Error loading options </p>}
        {isLoading && <p> Loading permutations... </p>}
        {isSelectPage && (
          <Fragment>
            <h3> Permutation Wizard </h3>
            <p> Select a test by clicking at least one of the options below! </p>
            <PermutationContainer
              options={mockData}
              toggleSelected={toggleSelected}
            />
            <div css={buttonContainer}>
              <button
                css={buttonStyle}
                disabled={noPermutationsSelected}
                onClick={() => setPage('View')}
                type="button"
              >
                next
              </button>
              {noPermutationsSelected && <p css={errorMessage}>Must select one to continue</p>}
            </div>
          </Fragment>
        )
        }
        {isViewPage && (
          <Fragment>
            <h3> Nice Choices! These are the codes you will be testing/ </h3>
            <PermutationContainer
              options={selected}
              isViewPage
            />
          </Fragment>
        )
        }
      </header>
    </div >
  );
}

export default App;
