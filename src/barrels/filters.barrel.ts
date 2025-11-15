// -----------------------------------------------------------------------------

export const TOGGLE_FILTER = '@@filters/TOGGLE';

// -----------------------------------------------------------------------------

export type Filter = {
  name: 'everything' | 'games' | 'freelance' | 'music';
  text: string;
  selected: boolean;
};

type State = Array<Filter>;

const initialState: State = [
  {name: 'everything', text: 'all projects', selected: false},
  {name: 'games', text: 'games', selected: true},
  {name: 'freelance', text: 'freelance', selected: true},
  {name: 'music', text: 'music', selected: false}
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
        // Clic sur "everything" : tout sélectionner
        filter.selected = true;
      } else if (isEverythingSelected) {
        // Si "everything" est sélectionné et qu'on clique sur une catégorie :
        // - Désélectionner "everything" et la catégorie cliquée
        // - Sélectionner toutes les autres catégories
        if (filter.name === 'everything' || filter.name === selectedName) {
          filter.selected = false;
        } else {
          filter.selected = true;
        }
      } else {
        // Sinon, toggle simple de la catégorie cliquée
        filter.selected = filter.name === selectedName
          ? !filter.selected
          : filter.selected;
      }

      if (filter.selected) {
        nbSelected++;
      }
    });

    // Si aucun filtre n'est sélectionné, tout sélectionner
    if (nbSelected === 0) {
      state.forEach(filter => (filter.selected = true));
    }

    // Si tous les filtres (sauf "everything") sont sélectionnés, sélectionner "everything"
    if (nbSelected === state.length - 1 && !everythingFilter.selected) {
      everythingFilter.selected = true;
    }
  }
};

// -----------------------------------------------------------------------------

export default {
  initialState,
  reactions: [onToggleFilter]
};
