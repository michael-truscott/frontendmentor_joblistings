/* eslint-disable jsx-a11y/anchor-is-valid */
import IconRemove from "./images/icon-remove.svg";

export default function FilterBar({tags, onClear, onRemoveTag}) {
  return (
    <div className="FilterBar__container">
      <div className="FilterBar__tags-container">
        {
          tags.map((tag) =>
            <FilterBarTag key={tag} tag={tag} onRemoveTag={onRemoveTag} />
          )
        }
      </div>
      <a onClick={onClear} className="FilterBar__btn-clear" href="#">Clear</a>
    </div>
  );
}

function FilterBarTag({tag, onRemoveTag}) {
  return (
    <div className="FilterBarTag__container">
      <p>{tag}</p>
      <div className="FilterBarTag__btn-remove-container" onClick={() => onRemoveTag(tag)}>
        <img src={IconRemove} alt="" />
      </div>
    </div>
  );
}