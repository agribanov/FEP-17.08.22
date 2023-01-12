import './App.css';

import FiltersPanel from '../FilterPanel/FiltersPanel';
import Form from '../Form/Form';
import List from '../List/List';
import { selectIsLoading } from '../../toolkitStore/slices/todosSlice';
import { useSelector } from 'react-redux';

function App() {
    const isLoading = useSelector(selectIsLoading);

    return (
        <div className="container">
            {isLoading ? (
                'Loading...'
            ) : (
                <>
                    <FiltersPanel />
                    <List />
                    <Form />
                </>
            )}
        </div>
    );
}

export default App;
