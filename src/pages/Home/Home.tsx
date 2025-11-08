import "./Home.css";
import BarraTopo from "../../components/BarraTopo/BarraTopo";
import CardAlerta from "../../components/CardAlerta/CardAlerta";
import { mockAlertas } from "../../mocks/alertas.mock";
function Home() {
  return (
    <div className="app-container">
        <BarraTopo 
          title="Alertas"
          iconType="menu"
        />
        <div className="lista-de-cards-container">
          {mockAlertas.map(alerta => (
            <CardAlerta key={alerta.id}
              alertType={alerta.alertType}
              title={alerta.title}
              location={alerta.location}
              time={alerta.time}
              expandedText={alerta.expandedText}
            />
          ))}
        </div>
         
    </div>
  );
}
export default Home;
