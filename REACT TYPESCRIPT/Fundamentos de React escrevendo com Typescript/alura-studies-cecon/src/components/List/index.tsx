import style from "./List.module.scss";
import Item from "./item";

import ITarefa from "../../types/tarefa";

interface Props {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

const List = ({ tarefas, selecionaTarefa }: Props) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((obj: ITarefa) => (
          <Item selecionaTarefa={selecionaTarefa} key={obj.id} {...obj} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
