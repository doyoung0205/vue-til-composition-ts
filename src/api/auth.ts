// 로그인, 회원 가입, (ex) 회원 탈퇴
import { instance } from "./index";
import { UserData } from "@/types/userType";

// 회원가입 API
function registerUser(userData: UserData): Promise<Record<string, any>> {
  return instance.post("signup", userData);
}

// 로그인 API
function loginUser(userData: UserData) {
  return instance.post("login", userData);
}

export { registerUser, loginUser };
