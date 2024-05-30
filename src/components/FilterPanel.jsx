import { useSelector, useDispatch } from 'react-redux';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import { selectFilters } from 'store/filters/fitler-selectors';
import { removeFilter, clearFilter } from 'store/filters/filter-actions';

const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);

  //визуально убираем панель для фильтров, если ничего не выбрано
  if (currentFilters.length === 0) {
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map(filter => (
            <Badge
              key={filter}
              variant="clearable"
              onClear={() => dispatch(removeFilter(filter))}
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button
          className='link'
          onClick={() => dispatch(clearFilter())}
        //в видео работает просто clearFilter без вызова
        >Clear</button>
      </div>
    </Card>
  )
}

export { FilterPanel };