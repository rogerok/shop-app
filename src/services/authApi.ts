import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { personalSafetyApi } from "./personalSafetyApi";
import { IPType, LoginDataType, RegisterDataType } from "../ts/types";

import { logout, setCredentials, setUserIP } from "../redux/user/userSlice";
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
    baseUrl: "https://",
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<ResponseType, RegisterDataType>({
      query(data) {
        return {
          url: "dummyjson.com/http/200",
          method: "POST",
          body: data,
        };
      },
    }),
    login: builder.mutation<LoginReponse, LoginDataType>({
      query(data) {
        return {
          url: "dummyjson.com/auth/login",
          method: "POST",
          body: {
            username: "jtreleven5",
            password: "zY1nE46Zm",
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
          await dispatch(personalSafetyApi.endpoints.getUserIP.initiate());
        } catch (err) {
          console.log(err);
        }
      },
    }),
    logout: builder.mutation<void, void>({
      query() {
        return {
          url: "dummyjson.com/http/200",
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
    getUserIP: builder.query<IPType, void>({
      query() {
        return {
          url: "api.ipify.org?format=json",
        };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUserIP(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetUserIPQuery,
} = authApi;
