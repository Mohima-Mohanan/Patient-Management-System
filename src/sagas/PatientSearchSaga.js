import { all, put, takeEvery, takeLatest } from 'redux-saga/effects';

function* actionwatcherForFetchPatients() {
    console.log("2. Inside Patient Saga actionwatcherForFetchPatients");
    yield takeEvery("FETCH_PATIENT_LIST", fetchPatientList);
}


function* fetchPatientList() {

    console.log("3. Inside Patient Saga fetchPatientList");

    const patientsListJSON = yield fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json(),);

    yield put({
        type: "FETCH-PATIENT-LIST-COMPLETED",
        payload: { patients: patientsListJSON }
    })

}
export default function* rootSaga() {
    yield all([actionwatcherForFetchPatients()]);
};