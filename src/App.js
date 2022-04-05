import logo from './logo.svg';
import './App.css';
import Header from './componets/Header'
import CardWidget from './componets/CardWidget';
import ListItem from './componets/ListItem';
import { listItemAvatarClasses } from '@mui/material';
import Boton from './componets/Boton';
import Title from './componets/Title';
import ItemDetailContainer from './componets/ItemDetailContainer';
import ItemListContainer from './componets/ItemListContainer';

function App() {
   const aurora = true

   return(
    <div>
      <div className='main-container'>
      <Header></Header>
      <Title></Title>
       <CardWidget/>
       <ListItem  greeting="Bienvenido!!!"></ListItem>
      </div>
      <ItemListContainer/>
       <ItemDetailContainer></ItemDetailContainer>

    </div>
 );
};

export default App;
