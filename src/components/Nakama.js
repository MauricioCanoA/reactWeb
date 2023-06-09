import React from "react";

export default function Nakama(){
  return (
    <div className="contenedor-nakama">
      <img className="imagen-nakama" src={require("../images/luffy.jpg")} alt="..."/>
      <div className="contenedor-texto-nakama">
        <p className="nombre-nakama">Monkey D. Luffy</p>
        <p className="cargo-nakama">Capitan</p>
        <p className="texto-nakama">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
}