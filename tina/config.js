import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "/public/images",
      publicFolder: "./",
      
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        fields: [
          {
            type: "string",
            name: "author",
            label: "Autor",
            required: true
          },
          {
            type: "image",
            name: "authorimg",
            label: "ImagenAutor",
            required: true
          },
          {
            type: "string",
            name: "categories",
            label: "categories",
            list: true,
            options:[
              {
                value:"Xa",
                label:"Xa"
              },
              {
                value: "Xb",
                label: "Xb"
              },
              {
                value: "insights",
                label: "Insights"
              },
              {
                value: "latest",
                label: "Latest"
              }
            ]
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true
          },
          {
            type: "image",
            name: "image",
            label: "Imagen",
            required: true
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "postsEn",
        label: "Posts Ingles",
        path: "src/content/postsEn",
        fields: [
          {
            type: "string",
            name: "author",
            label: "Autor",
            required: true
          },
          {
            type: "image",
            name: "authorimg",
            label: "ImagenAutor",
            required: true
          },
          {
            type: "string",
            name: "categories",
            label: "categories",
            list: true,
            options:[
              {
                value:"Xa",
                label:"Xa"
              },
              {
                value: "Xb",
                label: "Xb"
              },
              {
                value: "insights",
                label: "Insights"
              },
              {
                value: "latest",
                label: "Latest"
              }
            ]
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true
          },
          {
            type: "image",
            name: "image",
            label: "Imagen",
            required: true
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
