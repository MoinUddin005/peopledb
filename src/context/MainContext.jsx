import { createContext, useState } from 'react';

export const PeopleDBContext = createContext({});

const store = {
    page: 0,
    limit: 10,
    total: 0,
}

const MainContext = ({children}) => {
    const [getData, setData] = useState(store);
    return (
        <PeopleDBContext.Provider value={[getData, setData]}>
            {children}
        </PeopleDBContext.Provider>
    );
};

export default MainContext;