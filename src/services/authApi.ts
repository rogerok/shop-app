import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { LoginDataType, UserType, RegisterDataType } from "../ts/types";

import { logout, setUser } from "../redux/user/userSlice";

type ResponseType = {
  id: string;
  token: string;
};

type RegisterResponse = {
  status: string;
  message: string;
};

// here i use auth and register feature of dummyjson api for fake register and auth, api returns user data and token

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<ResponseType, RegisterDataType>({
      query(data) {
        return {
          url: "http/200",
          method: "POST",
          body: {
            username: "kminchelle",
            password: "0lelplR",
            userData: data,
          },
        };
      },
    }),
    login: builder.mutation<UserType, LoginDataType>({
      query(data) {
        return {
          url: "auth/login",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: {
            username: "kminchelle",
            password: "0lelplR",
            userData: {
              data,
            },
          },
        };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    logout: builder.mutation<void, void>({
      query() {
        return {
          url: "http/200",
        };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logout);
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useRegisterUserMutation, useLoginMutation, useLogoutMutation } =
  authApi;
