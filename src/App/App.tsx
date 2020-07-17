import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import { PermutationList } from '../PermutationContainer/PermutationContainer';
import { DataProps } from '../types'


const App: React.FC = () => {
  const [mockData, setMockData] = useState<DataProps[]>([]);
  const [selected, setSelected] = useState<DataProps[]>([]);
  const [isError, setError] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<string>('Select');

  const selectPermutation = (permutation: DataProps) => {
    const isSelected = selected.find(x => x.id === permutation.id)
    if (isSelected) {
      const removeSelected = selected.filter(x => x.id !== permutation.id)
      setSelected(removeSelected)
    } else {
      setSelected([...selected, permutation])
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      try {
        //  Quick solve for CORS error: https://stackoverflow.com/a/53977372
        const { data } = await axios.get('https://cors-anywhere.herokuapp.com/https://flowcode.com/mock-api-data');

        setMockData(data);
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

  return (
    <div className="App">
      <header className="App-header">
        {isError && <p> Error loading options </p>}
        {isLoading && <p> Loading permutations... </p>}
        <h3> Permutation Wizard</h3>
        {isSelectPage && (
          <Fragment>
            <PermutationList options={mockData} selectPermutation={selectPermutation} />
            <button
              disabled={!selected.length}
              onClick={() => setPage('View')}
              type="button"
            >
              next
              </button>
          </Fragment>
        )
        }
        {isViewPage && selected.map(x => <div>{x.brand}</div>)}
      </header>
    </div>
  );
}

export default App;
