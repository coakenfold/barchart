import { all, put, takeEvery, call } from "redux-saga/effects";
import Api from "../service";
import { REQUEST_CHART_DATA } from "./constants";
import { updateChartData, apiError } from "./actions";

export default function* rootSaga() {
  yield all([fetchChartFromApi()]);
}

export function* fetchChartFromApi() {
  yield takeEvery(REQUEST_CHART_DATA, makeApiRequest);
}
export function* makeApiRequest() {
  const data = yield call(Api.requestChartData);
  yield put(data.error ? apiError() : updateChartData(data));
}
