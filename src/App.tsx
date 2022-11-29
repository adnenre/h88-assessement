import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import Table from './components/Table';
import Input from './components/Input';
import Container from './components/Container';
import Loading from './components/Loading/Loading';

// initialize a GraphQL client
const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: process.env.REACT_APP_API_URL,
});

// write a GraphQL query that asks for names and codes for all countries
const OUNTRIES_QUERY = gql`
    {
        countries {
            name
            code
            native
            phone
            capital
            currency
        }
    }
`;
type searchField = {
    searchValue: string;
    searchField: string;
};
function App() {
    // COUNTRYCODE
    const [currentSearch, setCurrentSearch] = useState<searchField>({
        searchValue: '',
        searchField: 'code',
    });

    // QUERY RESPONSE
    const { data, loading, error } = useQuery(OUNTRIES_QUERY, { client });

    // EVENT HANDLER ONCHNAGE
    const handleChange = (searchValue: string) => {
        setCurrentSearch({ ...currentSearch, searchValue });
    };

    // LOADING OR ERROR MESSAGE
    if (loading || error) {
        return <Loading>{error ? error.message : 'Loading...'}</Loading>;
    }
    return (
        <Container>
            <Input
                onChange={handleChange}
                value={currentSearch.searchValue}
                placeholder={'Search ...'}
            />

            <Table
                // ROW DATA
                rows={data.countries}
                // LISTO OF COLS TO DISPLAY { false ? display all field : display filed is the array }
                colsToDisplay={['code', 'name']}
                // CURRENT SEARCH
                currentSearch={currentSearch.searchValue}
                // COLUMN NAME TO SEARCH BY
                filterByField={currentSearch.searchField}
                // BOOLEAN PROPERTY TO SHOW HIDE RIGHT PANEL
                showPanel
                // BOOLEAN PROPERTY TO SHOW PAGINATION
                showPagination
            />
        </Container>
    );
}

export default App;
