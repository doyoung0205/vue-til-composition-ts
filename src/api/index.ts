import axios, { AxiosInstance } from "axios";
import { setInterceptors } from "./common/interceptors";

function createInstance(): AxiosInstance {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL
  });
}

// 액시오스 초기화 함수
function createInstanceWithAuth(url: string): AxiosInstance {
  const instance: AxiosInstance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`
  });
  return setInterceptors(instance);
}

export const instance: AxiosInstance = createInstance();
export const posts: AxiosInstance = createInstanceWithAuth("posts");

// CREATE - posts
// POST - posts
// PUT - posts {id}
// DELETE - posts {id}
