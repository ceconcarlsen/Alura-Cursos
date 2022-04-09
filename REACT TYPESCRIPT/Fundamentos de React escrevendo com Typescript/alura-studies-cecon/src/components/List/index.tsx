import React from "react";
import style from "./List.module.scss";

import Item from "./item";

const List = () => {
  const tarefas = [
    { tarefa: "React", tempo: "02:00:00" },
    { tarefa: "Js", tempo: "01:00:00" },
  ];

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((obj, index) => (
          <Item key={index} {...obj} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
