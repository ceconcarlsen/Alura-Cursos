import React from "react";

const List = () => {
  const tarefas = [
    { tarefa: "React", tempo: "02:00:00" },
    { tarefa: "Js", tempo: "01:00:00" },
  ];

  return (
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((obj, index) => (
          <li key="index">
            <h3>{obj.tarefa}</h3>
            <span>{obj.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default List;
