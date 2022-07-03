
import React,{ useState, useEffect, createContext} from "react";
import getState from "./Store";

export const Context = createContext(null);

const injectContext = (PassComponent) => {
    const StoreWrapper = props => {
        const [state, setState] = useState(
            getState({
                getStore:()=>state.store,
                getActions:()=>state.actions,
                setStore: (updatedStore) => setState({
                    store: Object.assign(state.store, updatedStore),
                    actions: {...state.actions}
                })
            })
        );

        useEffect(()=>{},[])

        return(
            <Context.Provider value={state}>
                <PassComponent {...props}/>
            </Context.Provider>
        )
    }
    return StoreWrapper;
}
export default injectContext;