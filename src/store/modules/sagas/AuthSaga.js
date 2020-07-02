import { all, takeLatest, call, put } from "redux-saga/effects";
import Api from '../../../Services/Api';
import { SIGN_IN_REQUEST, REGISTER_REQUESTER, SIGN_OUT_REQUEST } from '../actionsTypes';
import { signInSuccess, signFailure } from '../actions/AuthActions';
import { useNavigation } from '@react-navigation/native';


export function* signIn({ payload }) {
  
  try {
    const { email, password } = payload;

    const response = yield call(Api.post, "session", {
      email,
      password
    });

    const { token } = response.data;

    if (!token) {
      return;
    }

    Api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token));

  
  } catch (err) {

    yield put(signFailure());
  }
}


export default all([
  takeLatest(SIGN_IN_REQUEST, signIn),
]);