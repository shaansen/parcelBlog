import jsonPlaceholder from "../apis/jsonPlaceholder";
import * as _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
  const promise = await jsonPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: promise.data
  });
};

export const fetchUser = id => async dispatch => {
  const promise = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: promise.data
  });
};
