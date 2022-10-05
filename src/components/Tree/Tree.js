import React, {Fragment} from 'react'
import "./Tree.css"
import ButtonSwitchFields from "../ButtonSwitchFields/ButtonSwitchFields";


const Tree = ({parent, children,  level}) => {

    return (

        <Fragment>
                    <ul className="sidebar-list">
                        <li className={`parent parent-${level}`} >
                            <ButtonSwitchFields parent = {parent} styles = "button"></ButtonSwitchFields>
                            <ul className="child" >
                                {children.map(item => (
                                    <Tree key={item.parent}  {...item} />
                                ))}
                            </ul>
                        </li>
                    </ul>
    </Fragment>
    )
}

export default Tree