import { useState } from 'react';
import { Banner } from './components/Banner';
import { Formulario } from './components/Formulario';
import { Time } from './components/Time';

function App() {
  const [colaboradores, setColaboradores] = useState([{
    nome: "",
    cargo: "",
    foto: "",
    time: ""
  }]);


  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9"
    },
    {
      nome: "Front-end",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF"
    },
    {
      nome: "DataScience",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2"
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8"
    },
    {
      nome: "UX e Designer",
      corPrimaria: "#D86EBF",
      corSecundaria: "#FAE5F5"
    },
    {
      nome: "Mobile",
      corPrimaria: "#FEBA05",
      corSecundaria: "#FFF5D9"
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF"
    },
  ]

  const handleColaboradores = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }



  return (
    <div className="App">
      <Banner />
      <Formulario concluir={value => handleColaboradores(value)} times={times.map(time => time.nome)} />
      {
        times.map((time, index) => <Time
          users={colaboradores.filter(user => user.time === time.nome)}
          key={index}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
        />
        )
      }
    </div>
  );
}

export default App;
