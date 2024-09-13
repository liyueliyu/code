import axios from "axios";

// 按需导出
export const getHomePageData = () =>
  axios.get("https://netease-serrver01.vercel.app/homepage/block/page");

export const getHomePageMenu = () =>
  axios.get("https://netease-serrver01.vercel.app/homepage/block/page");
