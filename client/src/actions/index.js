import streams from "../apis/streams";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

// Action creators
// POST
export const createStream = (formValues) => async (dispacth, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams", { ...formValues, userId });

  dispacth({ type: CREATE_STREAM, payload: response.data });
  // Programmatic navigation to get the user back to the StreamList
  history.push("/");
};

// GET
export const fetchStreams = () => async (dispacth) => {
  const response = await streams.get("/streams");

  dispacth({ type: FETCH_STREAMS, payload: response.data });
};

// GET
export const fetchStream = (id) => async (dispacth) => {
  const response = await streams.get(`/streams/${id}`);

  dispacth({ type: FETCH_STREAM, payload: response.data });
};

// PUT
export const editStream = (id, formValues) => async (dispacth) => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispacth({ type: EDIT_STREAM, payload: response.data });
  history.push("/");
};

// DELETE
export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};
