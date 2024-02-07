import { put, takeEvery, all, retry } from "redux-saga/effects";
import { BASE_URL } from "../URL";

// import { useNavigate } from "react-router-dom";

// const {
//   createdAt,
//   password,
//   registerId,
//   status,
//   saasId,
//   storeId,
//   storeName,
//   userId,
//   userType,
//   userName,
// } = localStorage.getItem("User_data")
//   ? JSON.parse(localStorage.getItem("User_data"))
//   : {};

function* handleLoginRequest(e) {
  console.log("E", e);
  const response = yield fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(e.payload),
  });
  const jsonData = yield response.json();
  console.log("LOGIN DATA", jsonData);
  if (jsonData) {
    if (jsonData.status === true) {
      // toast.success("Login Successfully");
      localStorage.setItem("Token", JSON.stringify(jsonData.data.jwt_response));
      localStorage.setItem(
        "Store_data",
        JSON.stringify(jsonData.data.store_data)
      );
      localStorage.setItem(
        "User_data",
        JSON.stringify(jsonData.data.user_data)
      );
      // window.location.href("/");
      yield put({
        type: "ComponentPropsManagement/handleLoginResponse",
        data: jsonData.data.user_data,
      });
    } else {
      // toast.error("Please enter correct username and password");
      yield put({
        type: "ComponentPropsManagement/handleLoginResponse",
        data: {},
      });
    }
  }
}
// REGISTER USER
function* handleRegisterRequest(e) {
  const response = yield fetch(`${BASE_URL}/user-master/customer-sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(e.payload),
  });
  const jsonData = yield response.json();
  console.log("REGISTER JSON", jsonData);

  if (jsonData) {
    if (jsonData.status === true) {
      // toast.success("Register User Successfully");
      // localStorage.setItem(
      //   "login_data",
      //   JSON.stringify(jsonData.data.user_data)
      // );
      // localStorage.setItem("Token", JSON.stringify(jsonData.data.jwt_response));
      // window.location.href("/");
      // yield put({
      //   type: "ComponentPropsManagement/handleLoginResponse",
      //   data: jsonData.data.user_data,
      // });
    } else {
      // toast.error("Please enter correct username and password");
      // toast.error(jsonData.message);
      yield put({
        type: "ComponentPropsManagement/handleLoginResponse",
        data: {},
      });
    }
  }
}

export function* helloSaga() {
  yield takeEvery(
    "ComponentPropsManagement/handleLoginRequest",
    handleLoginRequest
  );

  yield takeEvery(
    "ComponentPropsManagement/handleRegisterRequest",
    handleRegisterRequest
  );
}

// export function* incrementAsync() {
//     yield delay(1000)
//     yield put({ type: 'INCREMENT' })
// }

// export function* watchIncrementAsync() {
//     yield takeEvery('INCREMENT_ASYNC', incrementAsync)
// }

// export function* saga() {

// }

export default function* rootSaga() {
  yield all([
    helloSaga(),
    // watchIncrementAsync()
  ]);
}

// export default saga
