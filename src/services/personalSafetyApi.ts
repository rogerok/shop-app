import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUserIP, setUserGeo } from "../store/user/userSlice";
import { IPType, GeoType, UserGeoType } from "../ts/types";

const geoApiKey = "d00e9e3d1d2b4476b379f2880d3c89b9";

type UserGeoResponse = {
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

type GeoResponse = {
  location: {
    city: string;
    country: string;
    region: string;
  };
};

const apiKey = "at_TJkmeg75ahyXfiz4Kywz7hzjFmRUp";

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
          dispatch(
            personalSafetyApi.endpoints.getUserGeoByIp.initiate(data.ip)
          );
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
      transformResponse: (data: UserGeoResponse) => ({
        city: data.results[0].components.city,
        country: data.results[0].components.country,
        region: data.results[0].components.region,
        state: data.results[0].components.state,
      }),
    }),
    getUserGeoByIp: builder.query<GeoResponse, string>({
      query(ip) {
        return {
          url: `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`,
        };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            setUserGeo({
              country: data.location.country,
              city: data.location.city,
              region: data.location.region,
            })
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useGetUserGeoQuery } = personalSafetyApi;
