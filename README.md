# SAMCO COMPUTERS

## Project

1. Setup
2. Install Tools
3. Create Typescript React App Using Vite
4. Create Git Repository
   a. add README.md file
   b. Create GitHub account if you don't have one
   c. connect VS Code to github
   d. publish the repository
5. List Products
   a. Create Product Type
   b. Create Products array
   c. Add Product images
   d. Render Products

6. Add Page Routing
   a. npm install react-router-dom
   b. create route for homepage
   c. create router for product page
   d. add helmet for setting page title

7. Create Backend folder
   a. cd backend
   b. npm init

8. config Typescript
   npm install --save-dev typescript ts-node-dev
   create tsconfig.json

   ```json
   {
     "compilerOptions": {
       "target": "es2015",
       "outDir": "./build",
       "strict": true,
       "module": "commonjs",
       "esModuleInterop": true
     }
   }
   ```

   add dev and build command to package.json
   `"dev": "ts-node-dev --respawn --trnspile-only --files src/index.ts",'

   9. config eslint
      npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
      create .eslintrc.js

   ```js
   module.exports = {
     env: {
       es2016: true,
       node: true,
     },

     extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
     parser: '@typescript-eslint/parser',
     parseOptions: {
       ecmaVersion: 'es2016',
       sourceType: 'module',
     },
     plugins: ['@typescript-eslint'],
   }
   ```

9. Create Express Server
   a. npm install express
   b. npm install --save-dev @types/express

10. create src/index.ts
    a. copy data.ts and Product.ts from frontend to backend

11. ```js
    import express, {Request, Response} from express
    import {sampleProducts} from './data'
    ```

const app = express()
app.get('api/products', (req: Request, res: Response) => {
res.json(sampleProducts)
})

const PORT = 5000
app.listen(PORT, () => {
console.log(`server running at http://localhost: ${PORT}`)
})

```

12. npm start
```
