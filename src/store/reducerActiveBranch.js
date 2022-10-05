import JsonToTree from "../components/manageStoreFunc/jsonToTree";

const data =

{
    "Work with tree": {
        "Comfortable": "100%",
        "EasyGetting": "80%",
        "Vision control": "100%"
    },
    "You can": {
        "Change fields": "Change fields",
        "Save tree": {"you need to click": "on Save JSON"},
        "Download": "Click Choose",
        "See": "result"
    }
}

const defaultState = JsonToTree(data)


const CHANGESTORE = "CHANGESTORE"

export const reducerActiveBranch = (state = defaultState, action) => {
    switch (action.type) {

        case CHANGESTORE:

            return {...state, ...action.payload}

        default: return state
    }

}

export const switchActive = (payload) => ({
  type:  CHANGESTORE, payload

})