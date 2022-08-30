import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUserIP } from "../redux/user/userSlice";
import { IPType, GeoType, UserGeoType } from "../ts/types";

const geoApiKey = "d00e9e3d1d2b4476b379f2880d3c89b9";

type UserGeoRespons = {
  results: [
    {
      components: {
        city: string;
        country: string;
        region: string;
        state: string;
      };
    }
  ];
};

export const personalSafetyApi = createApi({
  reducerPath: "personalSafetyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://",
  }),
  endpoints: (builder) => ({
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
    getUserGeo: builder.query<UserGeoType, GeoType>({
      query({ lat, lng }) {
        return {
          url: `api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=d00e9e3d1d2b4476b379f2880d3c89b9`,
        };
      },
      transformResponse: (data: UserGeoRespons) => ({
        city: data.results[0].components.city,
        country: data.results[0].components.country,
        region: data.results[0].components.region,
        state: data.results[0].components.state,
      }),
    }),
  }),
});

export const { useGetUserGeoQuery } = personalSafetyApi;
