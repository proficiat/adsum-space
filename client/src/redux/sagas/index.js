import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import {
  IDEAS_FETCH_REQUESTED,
  ideasFetchSuccess,
  ideasFetchFail
} from '../actions/ideas'

const fetchIdeasList = () => {
  return axios.get('api/v1/ideas')
}

// const postIdea = () => {
//   return axios.post('api/v1/ideas', {
//     idea: {
//       title: '',
//       body: ''
//     }
//   })
// }

function* handleGetIdeasList(action) {
  try {
    const ideas = yield call(fetchIdeasList)
    // console.log({ ideas })
    yield put(ideasFetchSuccess(ideas.data))
  } catch (e) {
    yield put(ideasFetchFail(e.message))
  }
}

function* mySaga() {
  yield takeLatest(IDEAS_FETCH_REQUESTED, handleGetIdeasList)
}

export default mySaga
