import axios from "axios";
import { Post } from "@typedef/apiType";

const API_ORIGIN = "http://localhost:3500";

//글로벌 axios 기본 설정
axios.defaults.baseURL = API_ORIGIN;
axios.defaults.withCredentials = true;

export type BasicResponseType<T> = {
  data: T;
  config: { status: number };
};

export async function requestGet<T>(url: string) {
  try {
    const response = await axios.get<T>(url);
    return { data: response.data, config: { status: response.status } };
  } catch (err) {
    console.error(err);
    return { data: null, config: { status: 400 } };
  }
}

export async function requestPost<T>(url: string, body: object) {
  try {
    const response = await axios.post<T>(url, body);
    return { config: { status: 201 } };
  } catch (err) {
    console.error(err);
    return { config: { status: 400 } };
  }
}

export async function requestPatch<T>(url: string, body: object) {
  try {
    const response = await axios.patch<T>(url, body);
    return { config: { status: 200 } };
  } catch (err) {
    console.error(err);
    return { config: { status: 400 } };
  }
}

export async function requestDelete<T>(url: string, body?: object) {
  try {
    const response = await axios.delete<T>(url, { data: body });
    return { config: { status: 200 } };
  } catch (err) {
    console.error(err);
    return { config: { status: 400 } };
  }
}
