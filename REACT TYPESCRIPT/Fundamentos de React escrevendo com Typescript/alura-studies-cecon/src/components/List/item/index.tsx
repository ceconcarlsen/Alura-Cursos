import style from "../List.module.scss";

interface IItem {
  tarefa: string;
  tempo: string;
}

const Item = ({ tarefa, tempo }: IItem) => {
  return (
    <div>
      <li className={style.item}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
      </li>
    </div>
  );
};

export default Item;
