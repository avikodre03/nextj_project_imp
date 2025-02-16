import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserServer, logoutUserServer } from "./action";


interface AuthState {
  user: any;
  message: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  message: null,
  loading: false,
  error: null,
};

// Async action for login (calls the server action)
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }: { username: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await loginUserServer({ username, password }); // Call server action
      console.log("ress..",response.admin);
      
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || "Login failed");
    }
  }
);
// Async thunk for logout
// export const logoutUser = createAsyncThunk(
//   "auth/logoutUser",
//   async (_, { rejectWithValue }) => {
//     try {
//       await logoutUserServer();
//       return true;
//     } catch (error: any) {
//       return rejectWithValue(error.message || "Logout failed");
//     }
//   }
// );
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log("action.payload.admi",action.payload.admin.username);
        state.loading = false;
        // state.user = action.payload.admin.username;
        // state.message = action.payload.message;

        sessionStorage.setItem("token",action.payload.token)
        sessionStorage.setItem("user",action.payload.admin?.username)
        
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      //  // Logout handlers
      //  .addCase(logoutUser.fulfilled, (state) => {
      //   // state.user = null;
      
      //   sessionStorage.removeItem("token");
      //   sessionStorage.removeItem("user");
      // })
      // .addCase(logoutUser.rejected, (state, action) => {
      //   state.error = action.payload as string;
      // });
  },
});

// export const { logout } = authSlice.actions;
export default authSlice.reducer;
