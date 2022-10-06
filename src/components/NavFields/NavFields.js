import React, {Fragment} from 'react';
import "./NavFields.css";
import ButtonSwitchFields from "../ButtonSwitchFields/ButtonSwitchFields";

const NavFields = ({parent, children, isActive, path}) => {
    let styles

    isActive ? styles = "navButton active" : styles = "navButton"

    return (
        <Fragment>
            <ButtonSwitchFields parent={parent} path={path} styles={styles}></ButtonSwitchFields>
            {children.map(child => (
                <NavFields key={child.parent}  {...child} />
            ))}
        </Fragment>
    );
};

export default NavFields;