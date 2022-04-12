import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss";
import { tempoParaSegundo } from "../../common/utils/date";
import ITarefa from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props {
  selecionado?: ITarefa;
  finalizarTarefa: () => void;
}

const Stopwatch = ({ selecionado, finalizarTarefa }: Props) => {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundo(selecionado.tempo));
    }
  }, [selecionado]);

  const regressiva = (contador: number = 0) => {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  };

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um Card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock tempo={tempo} />
      </div>
      <Button onClick={() => regressiva(tempo)}>Começar</Button>
    </div>
  );
};

export default Stopwatch;
