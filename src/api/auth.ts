// 로그인, 회원 가입, (ex) 회원 탈퇴
import { instance } from "./index";
import {
  LoginRequest,
  SignUpResponse,
  LoginResponse,
  SignUpRequest
} from "@/types/userType";
import { AxiosPromise } from "axios";

// 회원가입 API
function registerUser(userData: SignUpRequest): AxiosPromise<SignUpResponse> {
  return instance.post("signup", userData);
}

// 로그인 API
function loginUser(userData: LoginRequest): AxiosPromise<LoginResponse> {
  return instance.post("login", userData);
}

export { registerUser, loginUser };
