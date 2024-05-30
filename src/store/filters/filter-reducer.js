import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from "./filter-actions";

export const filterReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_FILTER: {
            //избавляемся от дублирующих позиций: делаем проверку, если текущий стейт ещё не содержит action.filter, то есть по нему ещё не кликали, то добавляем его в стейт
            if (!state.includes(action.filter)) {
                return [...state, action.filter]; //иммутабельно добавляем новое значение
                //filter берём из экшена addFilter. Если там запись через payload, то будет action.payload
            }
            //если текущий стейт уже содержит action.filter, то есть по нему уже кликнули, то в стейт не добавляем фильтр ещё раз, просто возвращаем стейт
            return state;
        }
        case REMOVE_FILTER: {
            return state.filter(item => item !== action.filter)
            //возвращаем новое состояние. Если это не то, что мы хотим удалить, то фильтр оставляет это значение в стейте, иначе фильтр его отбрасывает
        }
        case CLEAR_FILTER: {
            return [];
        }
        default: {
            return state;
        }
    }
}