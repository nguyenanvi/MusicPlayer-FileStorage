# File storage for __Music Player__

This repository is in a _Three-Tiers Data Infractructure project_ : Music Player





## Other repository related with this project:

- [MusicPlayer-BackEnd](https://github.com/nguyenanvi/MusicPlayer-BackEnd.git) : Using Java Spring Boot
- [MusicPlayer-FrontEnd](https://github.com/nguyenanvi/MusicPlayer-FrontEnd.git) : In progess... Maybe ReactJS
- [MusicPlayer-FileStorage](https://github.com/nguyenanvi/MusicPlayer-FileStorage.git) : Using NodeJS


## Installation

Install and run with npm

```bash
  npm install
  npm run dev
```
## API Reference

#### Get item

```http
  GET /get/${fileName}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `fileName`      | `string` | **Required**. Name of item to fetch |

#### Save item

```http
  POST /save
```
```html
  <form method="POST" action="http://localhost:8081/save" enctype="multipart/form-data">
    <input type="file" name="file"/>
    <button type="submit">Upload</button>
  </form>
```
#### Get GUI to upload test file

```http
  GET http://localhost:8081/gui/upload
```

## Authors

- [@nguyenanvi](https://www.github.com/nguyenanvi)

