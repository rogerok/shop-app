import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { LoginDataType, RegisterDataType } from "../ts/types";

import { logout, setCredentials } from "../redux/user/userSlice";
// eslint-disable-next-line import/no-cycle
import { userApi } from "./userApi";

type ResponseType = {
  id: string;
  token: string;
};

type LoginReponse = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
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
    login: builder.mutation<LoginReponse, LoginDataType>({
      query(data) {
        return {
          url: "auth/login",
          method: "POST",
          body: {
            username: "dpierrof",
            password: "Vru55Y4tufI4",
            userData: {
              data,
            },
          },
        };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data.token));
          await dispatch(userApi.endpoints.getUserData.initiate(data.id));
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
