export const IDEAS_FETCH_REQUESTED = 'IDEAS_FETCH_REQUESTED'
export const IDEAS_FETCH_SUCCESSED = 'IDEAS_FETCH_SUCCESSED'
export const IDEAS_FETCH_FAILED = 'IDEAS_FETCH_FAILED'

export const fetchIdeas = ideas => ({
  type: IDEAS_FETCH_REQUESTED
})

export const ideasFetchSuccess = ideas => ({
  type: IDEAS_FETCH_SUCCESSED,
  payload: { ideas }
})

export const ideasFetchFail = message => ({
  type: IDEAS_FETCH_FAILED,
  payload: { message }
})
