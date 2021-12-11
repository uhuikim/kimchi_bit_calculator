// Actions
const DOLLAR_TO_WON = 'DOLLAR_TO_WON';
const KIMCHI_PREMIUM = 'KIMCHI_PREMIUM';

// Reducer
const DEFAULT_STATE = {
  dollar: 0,
  kimchi: 0,
};

export default function (status = DEFAULT_STATE, action) {
  switch (action.type) {
    case DOLLAR_TO_WON:
      return { ...status, dollar: action.payload };

    case KIMCHI_PREMIUM:
      return { ...status, kimchi: action.payload };

    default:
      return status;
  }
}

// Action Creators
export function dollarToWon(payload) {
  return {
    type: DOLLAR_TO_WON,
    payload,
  };
}

export function setKimchiPre(payload) {
  return {
    type: KIMCHI_PREMIUM,
    payload,
  };
}
