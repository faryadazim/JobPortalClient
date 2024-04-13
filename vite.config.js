import { defineConfig } from "vite"; 
import react from "@vitejs/plugin-react";  
// import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
 



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()  ],
  // base:"/job-portal/",
  // server: {
  //   // Enable history fallback for client-side routing
  //   historyApiFallback: true,
  // },
});
// import

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     // ...,
//     TanStackRouterVite(),
//   ],
// })
