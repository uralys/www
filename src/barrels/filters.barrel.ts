// -----------------------------------------------------------------------------

export const SELECT_FILTER = '@@filters/SELECT';

// -----------------------------------------------------------------------------

export type Filter = {
  name: 'everything' | 'music' | 'games' | 'projects' | 'freelance';
  selected: boolean;
};

type State = Array<Filter>;

const initialState: State = [
  {name: 'everything', selected: true},
  {name: 'music', selected: true},
  {name: 'games', selected: true},
  {name: 'projects', selected: true},
  {name: 'freelance', selected: true}
];

// -----------------------------------------------------------------------------

type SelectFilterPayload = {selectedName: Filter['name']};

export type SelectFilterAction = {
  type: '@@filters/SELECT';
  payload: SelectFilterPayload;
};

const onSelectFilter = {
  on: SELECT_FILTER,
  reduce: (state: State, payload: SelectFilterPayload) => {
    const {selectedName} = payload;

    state.forEach(filter => {
      filter.selected = filter.name === selectedName;
    });
  }
};

// -----------------------------------------------------------------------------

export default {
  initialState,
  reactions: [onSelectFilter]
};
