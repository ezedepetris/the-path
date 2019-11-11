import { createReducer, createActions } from 'reduxsauce';

const INITIAL_STATE = {
  id: '',
  userName: '',
  firstName: '',
  lastName: '',
  avatar: null,
  email: '',
  isPro: false,
  followingIds: null,
  following: [],
  followerIds: null,
  followers: [],
  loading: true
};

const setUserReducer = (state, { payload }) => {
  const {
    id,
    userName,
    firstName,
    lastName,
    avatar,
    email,
    isPro,
    followers,
    following,
  } = payload;
  const followerIds = payload.followers.map(f => f.id)
  const followingIds = payload.following.map(f => f.id)

  return {
    ...state, // I think that it's innecesary
    id,
    userName,
    firstName,
    lastName,
    avatar,
    email,
    isPro,
    followingIds,
    following,
    followerIds,
    followers,
    loading: false
  };
};

const setFollowersReducer = (state, { payload }) => {
  const ids = payload.followers.map(f => f.id)

  return {
    ...state,
    followerIds: payload.ids,
    followers: payload.followers,
    loading: false
  };
};

const setFollowingReducer = (state, { payload }) => {
  const ids = payload.following.map(f => f.id)

  return {
    ...state,
    followingIds: ids,
    following: payload.following,
    loading: false
  };
};

const setLoadingReducer = (state, { value }) => ({
  ...state,
  loading: value
})


const { Types, Creators } = createActions({
  setLoading: ['value'],
  getUser: null,
  setUser: ['payload'],
  unfollowUser: ['payload'],
  followUser: ['payload'],
  getFollowersList :null,
  setFollowers: ['payload'],
  getFollowingList :null,
  setFollowing: ['payload'],
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_LOADING]: setLoadingReducer,
  [Types.SET_USER]: setUserReducer,
  [Types.SET_FOLLOWERS]: setFollowersReducer,
  [Types.SET_FOLLOWING]: setFollowingReducer,
});

export const UserTypes = Types;
export default Creators;
