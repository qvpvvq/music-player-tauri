import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetTracks = (query?: string, cursor?: string) => {
    return useInfiniteQuery({
        queryKey: ['tracks', query],
        queryFn: async ({ pageParam }) => {
            const { data } = await axios.get(`http://localhost:3005/tracks`, {
                params: {
                    query,
                    cursor: pageParam,
                },
            });
            return data;
        },
        initialPageParam: undefined,
        getNextPageParam: (lastPage) => lastPage.nextCursor,
    });
};
