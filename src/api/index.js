
import axios from "axios";

// 按需导出
export const getHomePageData = () =>
  axios.get("http://192.168.68.178:3000/homepage/block/page");

export const getHomePageMenu = () =>
  axios.get("http://192.168.68.178:3000/homepage/block/page");
