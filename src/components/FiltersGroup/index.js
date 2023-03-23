import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    changeSearchValue,
    changeRatingId,
    changeCategoryId,
    clear,
  } = props

  console.log(ratingsList[0].ratingId)

  const clickRating = event => {
    changeRatingId(event.target.value)
    console.log(event.target.value)
  }

  const clearFilters = () => {
    clear()
  }

  const clickCategory = event => {
    changeCategoryId(event.target.value)
    console.log(event.target.value)
  }

  const changeSearch = event => {
    changeSearchValue(event.target.value)
  }

  return (
    <div className="filters-group-container">
      <div className="search-input-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={changeSearch}
        />
        <BsSearch />
      </div>
      <h1>Category</h1>
      <ul className="category-list">
        {categoryOptions.map(eachCategory => (
          <li key={eachCategory.categoryId}>
            <button
              type="button"
              value={eachCategory.categoryId}
              onClick={clickCategory}
            >
              <p>{eachCategory.name}</p>
            </button>
          </li>
        ))}
      </ul>
      <h1>Rating</h1>
      <ul className="rating-list">
        {ratingsList.map(eachRating => (
          <li className="li-item" key={eachRating.ratingId}>
            <button
              type="button"
              value={eachRating.ratingId}
              id={eachRating.ratingId}
              onClick={clickRating}
            >
              <img
                src={eachRating.imageUrl}
                alt={`rating ${eachRating.ratingId}`}
                className="rating-image"
              />
              <p>& up</p>
            </button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
