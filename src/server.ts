import express from "express";
import QRCode from "qrcode";

const app = express();

const dataPerson = [
  { nome: "John", idade: 23, sexo: "Masculino" },
  { nome: "John", idade: 23, sexo: "Masculino" },
  { nome: "John", idade: 23, sexo: "Masculino" },
  { nome: "John", idade: 23, sexo: "Masculino" },
  { nome: "John", idade: 23, sexo: "Masculino" },
];

app.get("/qrcode-generator", (require, response) => {
  const qrcode = QRCode.toDataURL("http://asyncawait.net");
  const res = QRCode.toString(
    JSON.stringify(dataPerson),
    { type: "svg" },
    function (err, url) {
      console.log(url);
      response.send(url);
    }
  );
});

app.listen(3333);
