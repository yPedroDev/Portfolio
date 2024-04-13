export enum NavTypes {
  SET_MOB
}

interface NavAction {
  type: NavTypes;
  payload: boolean;
}

interface NavState {
  isMobile: boolean;
}

export function NavbarRedu(state: NavState, action: NavAction) {
  const { type, payload } = action;
  switch (type) {
    case NavTypes.SET_MOB:
      return {
        ...state,
        isMobile: payload,
      };
    default:
      return state;
  }
}
