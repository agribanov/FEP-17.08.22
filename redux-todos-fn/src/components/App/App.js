import './App.css';

import Form from '../Form/Form';
import List from '../List/List';
import { selectIsLoading } from '../../store/selectors/todos';
import { useSelector } from 'react-redux';

function App() {
    const isLoading = useSelector(selectIsLoading);

    return (
        <div className="container">
            {isLoading ? (
                'Loading...'
            ) : (
                <>
                    <List />
                    <Form />
                </>
            )}
        </div>
    );
}

export default App;
