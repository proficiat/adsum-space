// FETCH
export const IDEAS_FETCH_REQUESTED = 'IDEAS_FETCH_REQUESTED'
export const fetchIdeas = (ideas) => ({
  type: IDEAS_FETCH_REQUESTED,
})

export const IDEAS_FETCH_SUCCESSED = 'IDEAS_FETCH_SUCCESSED'
export const ideasFetchSuccess = (ideas) => ({
  type: IDEAS_FETCH_SUCCESSED,
  payload: { ideas },
})

export const IDEAS_FETCH_FAILED = 'IDEAS_FETCH_FAILED'
export const ideasFetchFailed = (message) => ({
  type: IDEAS_FETCH_FAILED,
  payload: { message },
})

// CREATE
export const IDEA_CREATE_REQUESTED = 'IDEA_CREATE_REQUESTED'
export const createIdea = (idea) => ({
  type: IDEA_CREATE_REQUESTED,
  payload: { idea },
})

export const IDEA_CREATE_SUCCESSED = 'IDEA_CREATE_SUCCESSED'
export const createIdeaSuccess = (idea) => ({
  type: IDEA_CREATE_SUCCESSED,
  payload: { idea },
})

export const IDEA_CREATE_FAILED = 'IDEA_CREATE_FAILED'
export const createIdeaFailed = (message) => ({
  type: IDEA_CREATE_FAILED,
  payload: { message },
})

// DELETE
export const IDEA_DELETE_REQUESTED = 'IDEA_DELETE_REQUESTED'
export const deleteIdea = (ideaId) => ({
  type: IDEA_DELETE_REQUESTED,
  payload: { ideaId },
})

export const IDEA_DELETE_SUCCESSED = 'IDEA_DELETE_SUCCESSED'
export const deleteIdeaSuccess = (ideaId) => ({
  type: IDEA_DELETE_SUCCESSED,
  payload: { ideaId },
})

export const IDEA_DELETE_FAILED = 'IDEA_DELETE_FAILED'
export const deleteIdeaFailed = (message) => ({
  type: IDEA_DELETE_FAILED,
  payload: { message },
})

// UPDATE
export const IDEA_UPDATE_REQUESTED = 'IDEA_UPDATE_REQUESTED'
export const updateIdea = (ideaId, idea) => ({
  type: IDEA_UPDATE_REQUESTED,
  payload: { ideaId, idea },
})

export const IDEA_UPDATE_SUCCESSED = 'IDEA_UPDATE_SUCCESSED'
export const updateIdeaSuccess = (idea) => ({
  type: IDEA_UPDATE_SUCCESSED,
  payload: { idea },
})

export const IDEA_UPDATE_FAILED = 'IDEA_UPDATE_FAILED'
export const updateIdeaFailed = (message) => ({
  type: IDEA_UPDATE_FAILED,
  payload: { message },
})
