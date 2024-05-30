export const ADD_FILTER = 'ADD_FITLER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTER';

//принимает строковое значение filter и возвращает объект с типом ADD_FILTER и самим фильтром
export const addFilter = (filter) => ({
    type: ADD_FILTER,
    filter,
});

//возвращает объект с типом REMOVE_FILTER и самим фильтром
export const removeFilter = (filter) => ({
    type: REMOVE_FILTER,
    filter,
});

//возвращает объект с типом CLEAR_FILTER
export const clearFilter = () => ({
    type: CLEAR_FILTER,
});

