import { FC, ChangeEvent } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectNameFilter } from "../../redux/filtersSlice";
import { changeFilter } from "../../redux/filtersSlice";
import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox: FC = () => {
  const searchId = useId();
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectNameFilter);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <form className={css.container}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        className={css.searchInput}
        id={searchId}
        onChange={handleFilterChange}
      />
    </form>
  );
};

export default SearchBox;
