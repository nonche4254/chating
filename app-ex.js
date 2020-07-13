[1] 
const os = require("os");
// 기본모듈 불러오기
// console.log(os);

// console.log(os.homedir());
// os 디렉토리(경로) 확인

// console.log(os.hostname());
// 호스트 이름(컴퓨터 이름)

// console.log(os.totalmem());
// 컴퓨터 메모리 확인

// console.log(os.cpus());
// 컴퓨터 cpu 확인

// console.log(os.version());
// OS 버전 확인

[2]
// const Person = require("./person");

//인스턴스화 instantiate
// const person1 = new Person("banggo", 25);

// console.log(person1);
// greeting
// person1.greeting();
// person1.goodbye();
// const person2 = new Person("banggo", 18);
// console.log(person1, person2);
// goodbye () person class
// console.log (`잘가세요 ㅌㅌㅌ님`);

// const fs = require("fs");
// fs = 파일시스템 약자
// const path = require("path");

// fs.mkdir(path.join(__dirname, "/test"), {}, function (err) {
//   if (err) throw err;
//   console.log("폴더가 생성이 되었습니다.");
// });

// fs.writeFile(path.join(__dirname, "/test", "hello.txt"), {}, (err) => {
//   if (err) throw err;
//   console.log("파일이 생성 되었습니다.");
// });

// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "hello world",
//   (err) => {
//     if (err) throw err;
//     console.log("........");
//   }
// );

// fs.rename(
//   path.join(__dirname, "/test", "hello.txt"),
//   path.join(__dirname, "/test", "nodejs.txt"),
//   (err) => {
//     if (err) throw err;
//     console.log("파일명이 변경 되었습니다.");
//   }
// );

// console.log("aaaa");

const http = require("http");

const PORT = 3000;

// 서버 생성
http
  .createServer((req, res) => {
    if (req.url === "/api/users") {
      const users = [
        { name: "nonche", age: 20 },
        { name: "horang", age: 15 },
        { name: "nabi", age: 18 },
        { name: "sinobi", age: 25 },
        { name: "hami", age: 28 },
      ];
      res.write(JSON.stringify(users));
    } else if (req.url === '/api/todos') {
      // todo 관련된 내용을 response 해주는 api
    } const todos = [
      { age: 20, playing: "game"},
      { age: 18, playing: "movie"},
      { age: 28, playing: "animation"},
    ];
    res.write(JSON.stringify(todos));
    else if (req.url === '/api/todos')
      {
      res.write("<h1>Hello Node JS</h1>");
    }
    res.end();
  })
  .listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
