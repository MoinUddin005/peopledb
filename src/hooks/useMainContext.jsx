import { useContext } from 'react';
import { PeopleDBContext } from '../context/MainContext';

const useMainContext = () => {
    return useContext(PeopleDBContext);
};

export default useMainContext;