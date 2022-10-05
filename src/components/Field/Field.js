import React, {Fragment} from 'react';
import "./Field.css"
import Input from "./Input";


const Field = ({parent, children, fields, level, isActive}) => {
    const obj = {parent, children, fields, level, isActive}

    return (
        <Fragment>
            {obj.isActive ?
                obj.fields.length !== 0 ?
                    <Input
                        parent={obj.parent} fields={obj.fields}>
                    </Input>
                    : <div className="field"><h1> Empty branch </h1></div>
                : null}

            {obj.children.length !== 0 ? obj.children.map(child => (
                <Field key={child.parent} {...child}/>
            )) : null}

        </Fragment>
    );
};


export default Field;