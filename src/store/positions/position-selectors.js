export const selectAllPositions = (state) => state.positions;
//positions это ключ из combineReducers в root-reducer.js


export const selectVisiblePositions = (state, filters = []) => {
    //селектор зависит от state и от набора фильтров filters
    if (filters.length === 0) return state.positions
    //если нет фильтров, то не делаем никаких обработок
    //иначе перебираем state.positions и выбираем значения, которые соответствуют фильтру

    //фильтр берёт позицию pos и собирает все её значения tools, languages, role, level в один массив. pos.language и pos.tools сами по себе массивы, поэтому их декструктурируем с помощью rest
    return state.positions.filter(pos => {
        const posFilters = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);

        //проверяем, соответствуют ли posFilters фильтрам filters, то есть что строковые значения в массиве filters = [] соответствуют значениям в массиве posFilters. Если хоть какое-то значение не соответствует, то every вернёт false и метод filter не положит значение в pos в формируемый фильтром массив. Для каждого элемента фильтра filter делаем проверку includes, что posFilters содержит этот фильтр
        return filters.every(filter => posFilters.includes(filter))
    })
}