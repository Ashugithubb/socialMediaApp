// // src/redux/thunks/getUserPosts.ts
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const getUserPostsThunk = createAsyncThunk(
//   'posts/getUserPosts',
//   async (userId: number, thunkAPI) => {
//     try {
//       const response = await axios.get(`http://localhost:3000/posts/user/${userId}`);
//       return response.data;
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
//     }
//   }
// );

// // src/redux/slices/userPosts.slice.ts
// import { createSlice } from '@reduxjs/toolkit';
// import { getUserPostsThunk } from '../thunks/getUserPosts';

// const userPostsSlice = createSlice({
//   name: 'userPosts',
//   initialState: {
//     posts: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getUserPostsThunk.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getUserPostsThunk.fulfilled, (state, action) => {
//         state.loading = false;
//         state.posts = action.payload;
//       })
//       .addCase(getUserPostsThunk.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
//   },
// });

// export default userPostsSlice.reducer;


// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUserPostsThunk } from '../redux/thunks/getUserPosts';

// export const MyPosts = ({ userId }: { userId: number }) => {
//   const dispatch = useDispatch();
//   const { posts, loading, error } = useSelector((state: any) => state.userPosts);

//   useEffect(() => {
//     dispatch(getUserPostsThunk(userId));
//   }, [userId]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>My Posts</h2>
//       {posts.map((post: any) => (
//         <div key={post.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
//           <p><strong>Category:</strong> {post.postCatogory}</p>
//           {post.textPost && <p>{post.textPost.content}</p>}
//           {post.quotePost && (
//             <blockquote>
//               “{post.quotePost.quote}” — <em>{post.quotePost.author}</em>
//             </blockquote>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };
