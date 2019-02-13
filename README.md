## Tech Stack
React, Redux, WebPack, Node.js & Express.js

## Micro apps (Core, Product and Cart).
- All micro apps are independently developed and deployed
- Configured webpack to build UMD library
- Micro apps will expose two api endpoint implemented in express.js
     - /api/assests (it will serve js & css)
     - /api/render (it will return SSR html)

> Commands to run individual micro apps
```
npm run build
npm run server
```

## Created a AppShell (container app).
**Container app are responsible for below**
- Seamless Routing
- CSR & SSR (Hydration)
- Load micro apps asynchronously
- Composing micro apps

> Commands to run app-shell
```
npm run dev
```
