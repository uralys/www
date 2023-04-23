// -----------------------------------------------------------------------------

export const TOGGLE_FILTER = '@@filters/TOGGLE';

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

type ToggleFilterPayload = {selectedName: Filter['name']};

export type ToggleFilterAction = {
  type: '@@filters/TOGGLE';
  payload: ToggleFilterPayload;
};

const onToggleFilter = {
  on: TOGGLE_FILTER,
  reduce: (state: State, payload: ToggleFilterPayload) => {
    const {selectedName} = payload;
    const isEverythingSelected = state.find(
      f => 'everything' === f.name
    )?.selected;

    state.forEach(filter => {
      if ('everything' === selectedName) {
        filter.selected = true;
      } else {
        filter.selected = isEverythingSelected
          ? filter.name === selectedName
          : filter.name === selectedName
          ? !filter.selected
          : filter.selected;
      }
    });

    if (!state.find(f => f.selected)) {
      state.forEach(filter => (filter.selected = true));
    }
  }
};

// -----------------------------------------------------------------------------

export default {
  initialState,
  reactions: [onToggleFilter]
};
