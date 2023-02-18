import ReactDOM from 'react-dom/client';
import Header  from './component/Header';
import Footer from './component/Footer';
import Student from './component/Student';
import { faker } from '@faker-js/faker';

const root = ReactDOM.createRoot(document.getElementById("root"))

var data = [] ;

function GenData(num){
   data = [] ;
   for(let i=0 ; i<num;i++){
      data.push({
         dp : `${faker.image.avatar()}`,
         name : faker.name.firstName(),
         comment :faker.lorem.sentence(60),
      })
   }
}

GenData(10);

root.render(  
 <div>
    <Header/>
    {
      data.map( (currentData) => {
         // console.log(`${currentData.dp} , ${currentData.name} , ${currentData.comment}`)
         return <Student url = {currentData.dp}  name = {faker.name.firstName()} comment ={faker.lorem.sentence(60)}/>    
      })
    }
    <Footer/>
 </div>
)