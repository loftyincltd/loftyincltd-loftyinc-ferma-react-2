import React,{useEffect} from 'react';
// import { Link } from 'react-router-dom';
import { HANDLE_CHANGE, FETCH_USER, CLEAR } from '../../redux/usersetup/action'; 
import { SET_USERS } from '../../redux/application/action'; 
import { useDispatch, useSelector } from 'react-redux';
import TabsWidget from '../../components/widgets/TabsWidget';
import Search2 from '../../components/Search2';
import Filter from '../../components/Filter';
import TransactionLists2 from '../../components/lists/TransactionLists2';
import CardWidget from '../../components/widgets/CardWidget'; 
import RadioOptions from '../../components/RadioOptions';

const Index = () => {
  const { user, filter_type} = useSelector((state) => state.app);
  const { form, } = useSelector((state) => state.usersetup);
  const dispatch = useDispatch();

  useEffect(() => {
    const form = {
      type: 'customer', 
      all: true, download: false
    }
    const f ={loading: true}
    dispatch(CLEAR())
    dispatch(HANDLE_CHANGE(f));
    dispatch(HANDLE_CHANGE(form));
     dispatch(FETCH_USER(form)).then((resp)=>{
      const f ={loading: false}
      dispatch(HANDLE_CHANGE(f));
      if(resp &&resp.success){
        dispatch(CLEAR(form))
        dispatch(SET_USERS(resp.success));

      }
    });
    
  }, []);
  const download= () => {
    const form2 = {
      type: 'customer', 
      all: true,
      download: true
    }
   if( filter_type!=='filter'){
       if(form.q){
        form2. q = form.q;
       }
   }else{
    if(form.occupation  && form.occupation.trim()!==""){
      form2. occupation = form.occupation;
   }
   if(form.state){
     form2.state = form.state;
  }
  if(form.district){
   form2. district = form.district;
  }
   }
   
    const f ={loading: true}
    dispatch(CLEAR())
    dispatch(HANDLE_CHANGE(f));
    dispatch(HANDLE_CHANGE(form2));
     dispatch(FETCH_USER(form2)).then((resp)=>{
      const f ={loading: false}
      dispatch(HANDLE_CHANGE(f));
      if(resp &&resp.success){
        dispatch(CLEAR(form))

     //   dispatch(SET_USERS(resp.success));

      }
    });
    //
    };
  return (
    <div className="dashboard-container-main" style={{marginBottom: '20px'}}>
   <RadioOptions data={data}  default_val={'search'}/> 
   {
     filter_type!=='filter'?
     <Search2 />: <Filter />
   }

    {user.super?
               <button
               style={{  background:'blue',}}
              className={true?'primary btn' : 'disabled btn'}
              onClick={
                download
              }
            >
            Download Users
            </button>:<></>

            }
    <CardWidget Child={TransactionLists2} /> 
   
    <div>
    {/**<Pagination defaultCurrent={1} total={50} />**/}
    </div>
  
    <br/>
    <br/>
  </div>
  );
  
};
const data = [
  {
    title: 'Search',
    value: 'search',
  },
  {
    title: 'Filter',
    value: 'filter',
  },
 
];
export default Index;



