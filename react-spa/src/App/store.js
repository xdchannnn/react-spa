import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './FeedFeatures/postsSlice';

export default configureStore({
  reducer: {
    posts: postsReducer
  }
})