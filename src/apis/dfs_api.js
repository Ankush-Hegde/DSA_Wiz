import { BASE_URL} from "../config";
import { handleResponse } from "./responseHandler";

export async function comments({ itemId, page = 1 }) {
  const response = await fetch(
    `${BASE_URL}/dfs`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return handleResponse(response);
}