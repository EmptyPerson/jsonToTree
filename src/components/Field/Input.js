import React, {Fragment} from 'react';
import {useDispatch, useSelector} from "react-redux";
import searchByParent from "../manageStoreFunc/searchByParent";
import {switchActive} from "../../store/reducerActiveBranch";


const Input = ({fields, path}) => {
    const tree = useSelector(state => state)
    const dispatch = useDispatch()

    const changeFields = (ind, newValue) => {
        let changeBranch = searchByParent(tree, path)
        changeBranch.fields[ind] = newValue
        dispatch(switchActive(tree))
    }
    return (
        <Fragment>
            {fields.map((field, index) =>
                (
                    <div key={index} className="field">
                        <input key={index} value={field}
                               onChange={(e) => {
                                   changeFields(index, e.target.value)
                               }
                               }
                        ></input>
                    </div>
                )
            )
            }
        </Fragment>
    );
};

export default Input;

