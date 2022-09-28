import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

// eslint-disable-next-line import/no-cycle
import { RootState } from "../redux/rootReducer";
import { setUser } from "../redux/user/userSlice";
import { OrderType } from "../ts/ProductsTypes";
import { UserDataType } from "../ts/UserData";
import { API_ENDPOINTS } from "../utils/constants/API";

type UserOrdersResult = {
  carts: OrderType[];
  limit: number;
  skip: number;
  total: number;
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_ENDPOINTS.URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user?.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserData: builder.query<UserDataType, number>({
      query(id) {
        return {
          url: `/users/${id}`,
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

    getProductThumbnail: builder.query<string | number, string>({
      query(id) {
        return {
          url: `${API_ENDPOINTS.PRODUCTS}/${id}?select=thumbnail`,
        };
      },
    }),
    getUserOrders: builder.query<OrderType[], void>({
      query() {
        return {
          url: "/carts",
        };
      },
      transformResponse: (result: UserOrdersResult) => result.carts,
    }),
  }),
});

export const {
  useGetUserDataQuery,
  useGetProductThumbnailQuery,
  useGetUserOrdersQuery,
} = userApi;
