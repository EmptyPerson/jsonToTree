import React, {Fragment} from 'react';
import "./Field.css"
import Input from "./Input";


const Field = ({parent, children, fields, level, isActive, path}) => {
    const obj = {parent, children, fields, level, isActive, path}

    return (
        <Fragment>
            {obj.isActive ?
                obj.fields.length !== 0 ?
                    <Input
                        fields={obj.fields} path={path}>
                    </Input>
                    : <div className="field"><h1> Not field </h1></div>
                : null}

            {obj.children.length !== 0 ? obj.children.map(child => (
                <Field key={child.parent} {...child}/>
            )) : null}

        </Fragment>
    );
};


export default Field;