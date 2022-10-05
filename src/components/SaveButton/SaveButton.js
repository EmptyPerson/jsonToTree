import React from 'react';
import {useSelector} from "react-redux";
import "./SaveButton.css"

const SaveButton = () => {
    const tree = useSelector(state => state);

    const handleSaveToPC = jsonData => {
        const fileData = JSON.stringify(jsonData, null, 2);
        const blob = new Blob([fileData], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'New.json';
        link.href = url;
        link.click();
    }

    const saveData = (data) => {
        let jsonObj = {}
        let childObject = {}


        if (data.children && data.children.length !== 0) {
            for (let child of data.children) {
                if (child.children && child.children.length)
                    if (child.isArray) childObject[child.parent] = Object.values(saveData(child))
                    else
                        childObject[child.parent] = saveData(child)
                else
                    childObject[child.parent] = child.fields[0]
            }
            jsonObj[data.parent] = childObject
        } else {
            return null
        }

        return childObject
    }

    return (
        <div>
            <button className="save-button" onClick={() => {
                handleSaveToPC(saveData(tree))
            }}>Save JSON
            </button>
        </div>
    );
};

export default SaveButton;