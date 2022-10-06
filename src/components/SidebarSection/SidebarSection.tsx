import React, { FC } from "react"
import style from "./index.module.css";
interface ISidebarSection {

}
const SidebarSection: FC<ISidebarSection> = () => {
    return (
        <div className={style.SidebarSection}>
            SidebarSection
        </div>

    );
}

export default SidebarSection;