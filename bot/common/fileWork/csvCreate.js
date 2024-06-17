import path from "path"
import fs from "fs"
export const csvCreate = (users) => {
  fs.writeFile(path.resolve("bot/resFile/allUsers.csv"), `login, username, privileged,notice, createdAt\n`,
    function (error) {
      if (error) return console.log(error); // если возникла ошибка

      console.log("Запись файла завершена");
    });



  users.map((item) => {
    fs.appendFile(path.resolve("bot/resFile/allUsers.csv"), `\
    ${(item.login).toString().replace(/,/g, ".")},\
    ${(item.username).toString().replace(/,/g, ".")},\
    ${(item.privileged).toString().replace(/,/g, ".")},\
    ${(item.notice).toString().replace(/,/g, ".")},\
    ${(item.createdAt).toString().replace(/,/g, ".")}\n`,
      function (error) {
        if (error) return console.log(error); // если возникла ошибка

        console.log("Запись файла завершена");
      });

  })
}
