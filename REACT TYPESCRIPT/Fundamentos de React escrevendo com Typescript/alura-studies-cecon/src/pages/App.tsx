import { useState } from "react";
import "../App.css";
import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import ITarefa from "../types/tarefa";

// generate unique id's for css
import style from "./App.module.scss";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  const selecionaTarefa = (tarefaSelecionada: ITarefa) => {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  };

  const finalizarTarefa = () => {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas((tarefasAnteriores) =>
        tarefasAnteriores.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true,
            };
          }
          return tarefa;
        })
      );
    }
  };

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List selecionaTarefa={selecionaTarefa} tarefas={tarefas} />
      <Stopwatch finalizarTarefa={finalizarTarefa} selecionado={selecionado} />
    </div>
  );
}

export default App;
