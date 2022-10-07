import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { OrgDropDown } from "../../../assets";
import style from "./index.module.css";
interface ISelectViews {
  select: number;
  setSelect: Dispatch<SetStateAction<number>>;
}
const values = [1, 5, 10, 15, 20, 25];
const SelectViews: FC<ISelectViews> = ({ select, setSelect }) => {
  const [toggleItems, setToggleItems] = useState(false);
  const [detailsHeight, setDetailsHeight] = useState(0);
  const itemsEl = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setDetailsHeight(itemsEl.current?.scrollHeight ?? 0);
  }, [itemsEl]);
  return (
    <div className={style.SelectViews}>
      <div
        className={`${style.SelectViews__container} ${
          toggleItems && style.SelectViews__container__active
        }`}
        onClick={() => setToggleItems((props) => !props)}
      >
        <div className={style.SelectViews__container__selected}>{select}</div>
        <OrgDropDown
          className={`${style.SelectViews__container__icon} ${
            toggleItems && style.SelectViews__container__icon__active
          }`}
        />
      </div>
      <div
        ref={itemsEl}
        style={{ height: toggleItems ? `${detailsHeight}px` : 0 }}
        className={`${style.SelectViews__select} ${
          toggleItems && style.SelectViews__select__active
        }`}
      >
        {values.map((item) => (
          <div
            className={style.SelectViews__select__option}
            onClick={() => setSelect(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectViews;
