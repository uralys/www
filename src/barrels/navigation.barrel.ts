// -----------------------------------------------------------------------------

import {Project} from '../screens/home/projects';

export const SELECT_PROJECT = '@@navigation/SELECT_PROJECT';

// -----------------------------------------------------------------------------

type State = {selectedProject: Project | null};

const initialState: State = {
  selectedProject: null
};

// -----------------------------------------------------------------------------

type SelectProjectPayload = {project: Project | null};

export type SelectProjectAction = {
  type: '@@navigation/SELECT_PROJECT';
  payload: SelectProjectPayload;
};

const onSelectProject = {
  on: SELECT_PROJECT,
  reduce: (state: State, payload: SelectProjectPayload) => {
    const {project} = payload;
    state.selectedProject = project;
  }
};

// -----------------------------------------------------------------------------

export default {
  initialState,
  reactions: [onSelectProject]
};
