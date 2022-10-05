import React, {Fragment} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {switchActive} from "../../store/reducerActiveBranch";
import searchByParent from "../manageStoreFunc/searchByParent";


const ButtonSwitchFields = ({parent, styles}) => {
    const obj = useSelector(state => state)
    const dispatch = useDispatch()

    function Disactive(obj) {
        obj.isActive = false

        for (let child of obj.children) {
            child.isActive = false
            searchByParent(child)
        }


        return null
    }


    const onclick = () => {
        Disactive(obj)
        dispatch(switchActive(obj))
        let result = searchByParent(obj, parent)

        if (result) {
            result.isActive = !result.isActive
        }

        dispatch(switchActive(obj))


    }
    return (
        <Fragment>
            <button className={styles} onClick={onclick}>{parent}</button>
        </Fragment>
    );
};

export default ButtonSwitchFields;