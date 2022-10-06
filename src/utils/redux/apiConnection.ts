import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ApiHeaders = {
  Accept: "application/json",
};
const baseUrl = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1";
const ONE_YEAR = 365 * 24 * 60 * 60 * 1000;
enum Status {
  active = "active",
  inactive = "inactive",
  pending = "pending",
}
const createRequest = (url: string, method: any) => ({
  url,
  headers: ApiHeaders,
  method,
});

const apiConnection = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Get"],

  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => createRequest(`/users`, "GET"),
      transformResponse: (response: any) =>
        response.map((user: any) => ({
          createdAt: user.createdAt,
          orgName: user.orgName,
          userName: user.userName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          id: user.id,
          status:
            user.createdAt > user.lastActiveDate
              ? Status.inactive
              : Date.parse(user.lastActiveDate) - Date.parse(user.createdAt) >
                  ONE_YEAR &&
                Date.parse(user.lastActiveDate) - Date.parse(user.createdAt) <
                  ONE_YEAR * 3
              ? Status.pending
              : Status.active,
        })),
      providesTags: ["Get"],
    }),
    getUser: builder.query({
      query: (id) => createRequest(`/users/${id}`, "GET"),
      providesTags: ["Get"],
    }),
  }),
});
export const { useGetUsersQuery, useGetUserQuery } = apiConnection;
export default apiConnection;
