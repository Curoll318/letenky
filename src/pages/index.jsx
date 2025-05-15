import { render } from "@czechitas/render";
import { Flight } from '../components/Flight/flight';
import './index.css';
import airplane from '../img/ariplane.svg'; 
//import './style.css';


document.querySelector('#root').innerHTML = render(
    <div className="container">
      <Flight
        cityFrom="Praha"
        cityTo="Londýn"
        timeFrom="3. srpna 2022, 13:30"
        timeTo="3. srpna 2022, 14:00"
      />
      <img src={airplane} alt='letadlo' />
    </div>
);


