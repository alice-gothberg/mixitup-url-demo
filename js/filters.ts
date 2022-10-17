import mixitup from "mixitup" // npm install mixitup

import mixitupMultiFilter from "./mixitup-multifilter.min.js" // local file
import mixitupPagination from "./mixitup-pagination.min.js" // local file

/**
 * Interface for object to store active filter data
 */
interface QueryStringObject {
  page?: number
  orderby?: string
  category?: string
  color?: string
}

/**
 * Create an instance of QueryStringObject from a search-string (URI)
 * @param str a search string, e.g. 'orderby=default&color=red&page=2'
 * @returns an instance of QueryStringObject
 */
const createQueryObjectFromString = (str: string): QueryStringObject => {
  let query: QueryStringObject = {
    page: 1,
    orderby: "",
    category: "",
    color: "",
  }

  /**
   * Divide input string into filter property groups, populate
   * query object with data from input string.
   */
  let splitString = str.split("&")
  splitString.forEach((s) => {
    if (s.includes("page")) query.page = parseInt(s.split("=")[1])
    if (s.includes("orderby")) query.orderby = s.split("=")[1]
    if (s.includes("category")) query.category = s.split("=")[1]
    if (s.includes("color")) query.color = s.split("=")[1]
  })

  return query
}

/**
 * Create a search string from an object
 * @param query an instance of QueryStringObject
 * @returns a search string
 */
const createSearchString = (query: QueryStringObject): string => {
  let str = ""

  str += query.page > 0 ? "page=" + query.page : 1
  str += query.orderby != "" ? "&orderby=" + query.orderby : "&orderby=default"
  str += query.category != "" ? "&category=" + query.category : ""
  str += query.color != "" ? "&color=" + query.color : ""

  return str
}

/**
 * Update search string to reflect current active filters
 */
const updateSearchString = () => {
  let activePage = document.querySelector('.mixitup-page.mixitup-page-active')
  let currentPage = activePage ? parseInt(activePage.getAttribute('data-page')) : 1

  let activeOrderby = document.querySelector(".control-orderby.mixitup-control-active")
  let activeCategories = document.querySelectorAll(".control-category.mixitup-control-active")
  let activeColors = document.querySelectorAll(".control-color.mixitup-control-active")

  let orderbyString = activeOrderby ? activeOrderby.getAttribute("data-sort-type") : "default"
  let categoryString = ""
  let colorString = ""

  if (activeCategories.length > 0) {
    activeCategories.forEach((category) => {
      categoryString += category.getAttribute("data-label-clean") + ","
    })
  }

  if (activeColors.length > 0) {
    activeColors.forEach((color) => {
      colorString += color.getAttribute("data-label-clean") + ","
    })
  }

  let queryObject: QueryStringObject = {
    page: currentPage,
    orderby: orderbyString,
    category: categoryString.replace(/,$/, ""),
    color: colorString.replace(/,$/, ""),
  }

  let searchString = createSearchString(queryObject)
  window.history.replaceState({}, "", "?" + searchString)
}

/**
 * Activate/set filters. Called on page load
 * Creates an object from the current search string in the URL and
 * uses Mixitup Mulitifilter API to activate filters
 * @param mixer an instance of Mixitup
 */
const activateFilters = (mixer: any) => {
  if (window.location.search.length > 1) {
    let initialQuery: QueryStringObject = createQueryObjectFromString(
      window.location.search
    )

    if (mixer != null) {
      // Categories
      let categoryQueryArr = initialQuery.category.split(",")
      let categorySelectorsArr = []
      if (categoryQueryArr[0].trim() != "") {
        categoryQueryArr.forEach((category) => {
          categorySelectorsArr.push("[data-category~=" + category + "]")
        })
      }

      // Colors
      let colorsQueryArr = initialQuery.color.split(",")
      let colorsSelectorsArr = []
      if (colorsQueryArr[0].trim() != "") {
        colorsQueryArr.forEach((color) => {
          colorsSelectorsArr.push("[data-color~=" + color + "]")
        })
      }

      // Set filter group selectors : mixer.setFilterGroupSelectors('filter-group-name', 'filter-selectors')
      mixer.setFilterGroupSelectors("category", categorySelectorsArr)
      mixer.setFilterGroupSelectors("color", colorsSelectorsArr)

	  // Parse filter groups
	  mixer.parseFilterGroups()

      // Sorting / orderby
      mixer.sort(initialQuery.orderby)

      // Paginate
      let currentPage = initialQuery.page > 0 ? initialQuery.page : 1
      mixer.paginate(currentPage)
    }
  }
}

const mixEndFunction = () => {
  updateSearchString()
}

export function initFilters() {
  const mixContainer = document.querySelector(".mix-container")

  mixitup.use(mixitupMultiFilter)
  mixitup.use(mixitupPagination)

  /**
   * Initialise mixer
   */
  let mixer
  if (mixContainer) {
    mixer = mixitup(mixContainer, {
      selectors: {
        target: ".mix",
      },
	  animation: {
		enable: false
	  },
      multifilter: {
        enable: true,
      },
	  classNames: {
		elementPager: 'page'
	  },
      pagination: {
        limit: 10,
      },
      callbacks: {
        onMixEnd: mixEndFunction,
      },
    })
  }

  /**
   * Set filters on load
   */
  activateFilters(mixer)
}
