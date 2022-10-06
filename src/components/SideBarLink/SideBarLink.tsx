import React, { FC } from "react"
import style from "./index.module.css";

interface ISideBarLink {

}
const SideBarLink: FC<ISideBarLink> = () => {
    return (
        <div className={style.SideBarLink}>
            SideBarLink
        </div>

    );
}

export default SideBarLink;