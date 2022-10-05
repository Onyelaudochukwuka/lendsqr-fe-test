import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ApiHeaders = {
    "Accept": "application/json"
}
const baseUrl = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1";

const createRequest = (url: string, method: any) => ({ url, headers: ApiHeaders, method });
const apiConnection = createApi({
    reducerPath: 'Api',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ["Get"],

    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => createRequest(`/users`, "GET"),
            providesTags: ["Get"],
        }),
        getUser: builder.query({
            query: (id) => createRequest(`/users/${id}`, "GET"),
            providesTags: ["Get"],
        }),
        
    })
});
export const { useGetUsersQuery, useGetUserQuery } = apiConnection;
export default apiConnection;