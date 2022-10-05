import React, {Fragment} from 'react';
import {useDispatch} from "react-redux";
import {switchActive} from "../../store/reducerActiveBranch";
import JsonToTree from "../manageStoreFunc/jsonToTree";
import "./ButtonSourceData.css"

const ButtonSourceData = () => {
    const dispatch = useDispatch()


    const getData = (e) => {
        const upload = e.target.files[0];

        const reader = new FileReader();
        reader.addEventListener('load', (function (file) {
            return function (e) {
                const json = JSON.parse(e.target.result);
                const tree = JsonToTree(json)
                dispatch(switchActive(tree))

            }
        })(upload));
        reader.readAsText(upload);
    }

    return (
        <Fragment>
            <input onChange={getData} type="file" accept=".json" id="upload" placeholder="Choose JSON file"/>
            <label className="input-label" htmlFor="upload">Choose JSON</label>
        </Fragment>
    );
};

export default ButtonSourceData;