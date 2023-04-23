// -----------------------------------------------------------------------------

export const TOGGLE_FILTER = '@@filters/TOGGLE';

// -----------------------------------------------------------------------------

export type Filter = {
  name: 'everything' | 'music' | 'games' | 'freelance';
  text: string;
  selected: boolean;
};

type State = Array<Filter>;

const initialState: State = [
  {name: 'everything', text: 'all projects', selected: true},
  {name: 'music', text: 'music', selected: true},
  {name: 'games', text: 'games', selected: true},
  {name: 'freelance', text: 'freelance', selected: true}
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
    const everythingFilter = state.find(f => 'everything' === f.name) as Filter;
    const isEverythingSelected = everythingFilter.selected;

    let nbSelected = 0;
    state.forEach(filter => {
      if ('everything' === selectedName) {
        filter.selected = true;
      } else {
        filter.selected = isEverythingSelected
          ? filter.name === selectedName
          : filter.name === selectedName
          ? !filter.selected
          : false;
      }

      if (filter.selected) {
        nbSelected++;
      }
    });

    if (nbSelected === 0) {
      state.forEach(filter => (filter.selected = true));
    }

    if (nbSelected === state.length - 1) {
      everythingFilter.selected = true;
    }
  }
};

// -----------------------------------------------------------------------------

export default {
  initialState,
  reactions: [onToggleFilter]
};
