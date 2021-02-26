import React,{useEffect} from 'react';
// import { Link } from 'react-router-dom';
import { HANDLE_CHANGE, FETCH_WORKER, CLEAR } from '../../redux/usersetup/action'; 
import { SET_WORKERS } from '../../redux/application/action'; 
import { useDispatch, useSelector } from 'react-redux';
import TabsWidget from '../../components/widgets/TabsWidget';
import Search2 from '../../components/Search2';
import Filter from '../../components/Filter';
import TransactionLists3 from '../../components/lists/TransactionLists3';
import CardWidget from '../../components/widgets/CardWidget'; 
import RadioOptions from '../../components/RadioOptions';

const Index = () => {
  const { user, filter_type, current_project } = useSelector((state) => state.app);
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
     dispatch(FETCH_WORKER(form)).then((resp)=>{
      const f ={loading: false}
      dispatch(HANDLE_CHANGE(f));
      if(resp &&resp.success){
        dispatch(CLEAR(form))
        dispatch(SET_WORKERS(resp.success));

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
     dispatch(FETCH_WORKER(form2)).then((resp)=>{
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
   <h4 style={{width:'100%', textAlign:'left', paddingLeft:'15px', paddingBottom: '10px'}}>Project Title: {current_project.title}</h4>
   <h5 style={{width:'100%', textAlign:'left', paddingLeft:'15px', paddingBottom: '10px'}}>Project Description: {current_project.description}</h5>

   <br/>

    {user.super?
               <button
               style={{  background:'blue',}}
              className={true?'primary btn' : 'disabled btn'}
              onClick={
                download
              }
            >
            Download Workers
            </button>:<></>

            }
    <CardWidget Child={TransactionLists3} /> 
   
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



