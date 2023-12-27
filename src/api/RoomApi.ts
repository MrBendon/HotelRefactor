import { supabase } from "./supabase";

export async function getRoomsData() {
  const { data: rooms, error } = await supabase.from("rooms").select("*");

  if (error) throw new Error("資料獲取錯誤..");

  return rooms;
}
