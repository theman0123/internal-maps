//user
const FETCHING_USER = 'FETCHING_USER'
const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'
const REMOVE_FETCHING_USER = 'REMOVE_FETCHING_USER'

const fetchingUser = () => ({
  type: FETCHING_USER,
})

const fetchingUserError = (error) => {
  console.warn(error)
  return {
    type: FETCHING_USER_FAILURE,
    error: `error fetching user: ${error}`
  }
}

const fetchingUserSuccess = (user) => ({
  type: FETCHING_USER_SUCCESS,
  error: '',
  user,
})

const initialState = {
  isFetching: false,
  error: '',
}

const manageUser = (state = {}, action) => {
  switch(action.type) {
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        lastUpdate: Date.now(),
        info: action.user,
      }
  }
}

const user = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_USER:
      return {
        ...state,
        isFetching: true,
        error: '',
      }
    case FETCHING_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        authedId: action.user.uid,
        [action.user.uid]: manageUser(state[action.user.uid], action),
      }
    default:
      return state
  }
}

export default user

//iMaps
const FETCHING_IMAPS = 'FETCHING_IMAPS'
const FETCHING_IMAPS_FAILURE = 'FETCHING_IMAPS_FAILURE'
const FETCHING_IMAPS_SUCCESS = 'FETCHING_IMAPS_SUCCESS'
const REMOVE_FETCHING_IMAPS = 'REMOVE_FETCHING_IMAPS'

const fetchingIMaps = () => ({
  type: FETCHING_IMAPS,
})

const fetchingIMapsFailure = (error) => {
  console.warn(error)
  return {
    type: FETCHING_IMAPS_FAILURE,
    error: `an error occured while fetching your maps: ${error}`
  }
}
const fetchingIMapsSuccess = (iMaps, uid) => ({
  type: FETCHING_IMAPS_SUCCESS,
  iMaps,
  uid,
})

const initialState = {
  isFetching: false,
  error: '',
}

const iMaps = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_IMAPS:
      return {
        ...state,
        isFetching: true,
        error: '',
      }
    case FETCHING_IMAPS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_IMAPS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        lastFetched: Date.now()
        [action.uid]: action.iMaps,
      }
    default:
      return state
  }
}

export default iMaps

//comments

const FETCHING_COMMENTS = 'FETCHING_COMMENTS'
const FETCHING_COMMENTS_FAILURE = 'FETCHING_COMMENTS_FAILURE'
const FETCHING_COMMENTS_SUCCESS = 'FETCHING_COMMENTS_SUCCESS'
const REMOVE_FETCHING_COMMENTS = 'REMOVE_FETCHING_COMMENTS'

const fetchingComments = () => ({
  type: FETCHING_COMMENTS,
})

const fetchingCommentsFailure = (error) => {
  console.warn(error)
  return {
    type: FETCHING_COMMENTS,
    error: 'error fetching comments',
  }
}

const fetchingCommentsSuccess = (iMapId, comments) => ({
  type: FETCHING_COMMENTS,
  iMapId,
  comments,
})

const removeFetchingComments = () => ({
  type: REMOVE_FETCHING_COMMENTS,
})

const initialState = {
  isFetching: false,
  error: '',
}

const comments = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_COMMENTS:
      return {
        ...state,
        isFetching: true,
        error: '',
      }
    case FETCHING_COMMENTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_COMMENTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        [action.iMapId]: action.comments,
      }
    default:
      return state
  } 
}

export default comments

//modal
const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'
const UPDATE_MODAL = 'UPDATE_MODAL'

const openModal = () => ({
  type: OPEN_MODAL,
})

const closeModal = () => ({
  type: CLOSE_MODAL,
})

const updateModal = (update, section) => {
  return {
    type: UPDATE_MODAL,
    update,
    section,
  }
}

//might need UPDATE_MODAL_SUBSECTION//

const modal = (state = { isOpen: false }, action) => {
  switch(action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true
      }
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      }
    case UPDATE_MODAL:
      return {
        ...state,
        [action.section]: action.update
      }
    default:
      return state
  }
}

export default modal