import { serverUrl } from "~/utils/server"
export async function loader() {
  try {
    const response = await fetch(serverUrl + `/posts/?cursor=&limit=${5}`, {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
    const allPosts = await response.json()
   // console.log(allPosts)
    return allPosts
  } catch (error) {
    return { error: error }
  }
}
