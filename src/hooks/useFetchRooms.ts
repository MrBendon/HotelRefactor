import { useQuery } from "@tanstack/react-query";
import { getRoomsData } from "../api/RoomApi";

export const useFetchRooms = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getRoomsData"],
    queryFn: () => getRoomsData(),
  });
  return { data, isLoading, isError };
};
