import { createContext, useReducer } from "react";
import tooHigh from "../assets/images/too_high.jpg"
import tooLow from "../assets/images/too_low.jpg"
import goHigh from "../assets/images/go_high.jpg"
import goLow from "../assets/images/go_low.jpg"
import welcome from "../assets/images/welcome.jpg"
import success from "../assets/images/success.jpg"
import failure from "../assets/images/failure.jpg"


export enum ERootActions {
  updatePlayer = "updatePlayer",
  updateGameNumber = "updateGameNumber",
  updateBanner = "updateBanner"
}

export const banners = {
  tooHigh, tooLow, goHigh, goLow, welcome, success, failure
}

export enum EBanner {
  tooHigh = "tooHigh",
  tooLow = "tooLow",
  goHigh = "goHigh",
  goLow = "goLow",
  welcome = "welcome",
  success = "success",
  failure = "failure"
}

type TContext = {
  player: {
    name: string;
    isPlayer: boolean;
    chosenNumber: undefined | number;
  };
  gameNumber: number | undefined;
  banner: string;
};

// #region : payload-types

type TPlayerPayload = {
  type: ERootActions.updatePlayer,
  data: {
    name: string,
    isPlayer: boolean,
    chosenNumber: number | undefined
  }
}

type TBannerPayload = {
  type: ERootActions.updateBanner,
  data: string
}

type TGameNumberPayload = {
  type: ERootActions.updateGameNumber,
  data: number
}

// #endregion : payload-types

type TRooContextAction = {
  payload: TPlayerPayload | TBannerPayload | TGameNumberPayload
}

const initialValue: TContextSkull = {
  value: {
    player: {
      name: "",
      isPlayer: false,
      chosenNumber: undefined,
    },
    gameNumber: undefined,
    banner: banners[EBanner.welcome],
  },
  dispatch: {} as React.Dispatch<TRooContextAction>
};


const rootReducer = (state: TContext, action: TRooContextAction) => {
  if (action.payload.type === ERootActions.updatePlayer) {
    return { ...state, player: { ...action.payload.data } }
  } else if (action.payload.type === ERootActions.updateBanner) {
    console.log(`banner updated: ${action.payload.data}`);
    return { ...state, banner: action.payload.data }
  } else if (action.payload.type === ERootActions.updateGameNumber) {
    return { ...state, gameNumber: action.payload.data }
  } else {
    return state
  }
}


type TContextSkull = {
  value: TContext,
  dispatch: React.Dispatch<TRooContextAction>
}

export const rootContext = createContext<TContextSkull>(initialValue);


export const RootContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [value, dispatch] = useReducer(rootReducer, initialValue.value)
  return (
    <rootContext.Provider value={{ value, dispatch }}>
      {children}
    </rootContext.Provider>
  )
}