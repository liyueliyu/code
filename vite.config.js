import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置路径别名：通过一个符号对某个文件夹产生一个绝对路径，在文件位置发生变化的时候，路径不用改变
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
