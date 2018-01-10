import { call, put, takeLatest, all, fork } from 'redux-saga/effects'
import axios from 'axios'
import {
  IDEAS_FETCH_REQUESTED,
  IDEA_CREATE_REQUESTED,
  IDEA_DELETE_REQUESTED,
  IDEA_UPDATE_REQUESTED,
  ideasFetchSuccess,
  createIdeaSuccess,
  deleteIdeaSuccess,
  updateIdeaSuccess,
  ideasFetchFailed,
  createIdeaFailed,
  deleteIdeaFailed,
  updateIdeaFailed
} from '../actions/ideas'

const fetchIdeasList = () => {
  return axios.get('api/v1/ideas')
}

const createIdea = idea => {
  return axios.post('api/v1/ideas', { idea: idea })
}

const deleteIdea = ideaId => {
  return axios.delete(`api/v1/ideas/${ideaId}`)
}

const updateIdea = (ideaId, idea) => {
  return axios.put(`api/v1/ideas/${ideaId}`, { idea: idea })
}

function* handleFetchIdeasList(action) {
  try {
    const ideas = yield call(fetchIdeasList)
    yield put(ideasFetchSuccess(ideas.data))
  } catch (e) {
    yield put(createIdeaFailed, ideasFetchFailed(e.message))
  }
}

function* handleCreateIdea(action) {
  try {
    const { payload: { idea } } = action
    const response = yield call(createIdea, idea)
    const createdIdea = response.data
    yield put(createIdeaSuccess(createdIdea))
  } catch (e) {
    yield put(createIdeaFailed(e.message))
  }
}

function* handleDeleteIdea(action) {
  try {
    const { payload: { ideaId: deletedIdeaId } } = action
    yield call(deleteIdea, deletedIdeaId)
    yield put(deleteIdeaSuccess(deletedIdeaId))
  } catch (e) {
    yield put(deleteIdeaFailed(e.message))
  }
}

function* handleUpdateIdea(action) {
  try {
    const { payload: { ideaId, idea } } = action
    const response = yield call(updateIdea, ideaId, idea)
    const updatedIdea = response.data
    yield put(updateIdeaSuccess(updatedIdea))
  } catch (e) {
    yield put(updateIdeaFailed(e.message))
  }
}

function* fetchIdeaSaga() {
  yield takeLatest(IDEAS_FETCH_REQUESTED, handleFetchIdeasList)
}

function* createIdeaSaga() {
  yield takeLatest(IDEA_CREATE_REQUESTED, handleCreateIdea)
}

function* deleteIdeaSaga() {
  yield takeLatest(IDEA_DELETE_REQUESTED, handleDeleteIdea)
}

function* updateIdeaSaga() {
  yield takeLatest(IDEA_UPDATE_REQUESTED, handleUpdateIdea)
}

export default function* root() {
  yield all([
    fork(fetchIdeaSaga),
    fork(createIdeaSaga),
    fork(deleteIdeaSaga),
    fork(updateIdeaSaga)
  ])
}
