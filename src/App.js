import logo from './logo.svg';
import './App.css';
import Header from './componets/Header'
import CardWidget from './componets/CardWidget';
import ListItem from './componets/ListItem';
import { listItemAvatarClasses } from '@mui/material';

function App() {
   const aurora = true

   return(
    <div>
       <Header></Header>
       <CardWidget/>
       <ListItem  greeting="Bienvenido!!!"></ListItem>
    </div>
 );
};

export default App;
