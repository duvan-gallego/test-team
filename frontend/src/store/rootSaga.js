import { all } from 'redux-saga/effects'

import contactSaga from '../containers/ContactForm/sagas';

export default function* Sagas() {
  yield all([
    contactSaga(),
  ])
}