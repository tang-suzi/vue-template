import request from "@/utils/request";

export function getUserInfo(token) {
  return request({
    url: "/user/info",
    method: "get",
    params: { token },
  });
}

export function login(data) {
  return request({
    url: "/user/login",
    method: "post",
    data,
  });
}
