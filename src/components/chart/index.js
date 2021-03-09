import React from 'react'
import { Chart } from 'react-charts'
import { HANDLE_CHANGE, FETCH_STAT, CLEAR } from '../../redux/usersetup/action'; 
import { useDispatch, useSelector } from 'react-redux';
import State from '../../pages/Validate/Form/Project';
import { SET_STAT } from '../../redux/application/action'; 

  const Search = () => {
    const dispatch = useDispatch();
    let aa = useSelector((state) => state.app);
    console.log(aa)
    const [state, setState] = React.useState({
        data:[ {
            label: "States",
            datums:[{}]
          },
        ]
      });
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const series = React.useMemo(
        () => ({
          type: "bar"
        }),
        []
      );
      const axes = React.useMemo(
        () => [
          { primary: true, position: "bottom", type: "ordinal" },
          { position: "left", type: "linear", stacked: true }
        ],
        []
      );
      React.useEffect(() => {
        const form = {
            type: 'customer', 
            all: true, download: false
          }
          const f ={loading: true}
          dispatch(CLEAR())
          dispatch(HANDLE_CHANGE(f));
          dispatch(HANDLE_CHANGE(form));
           dispatch(FETCH_STAT(form)).then((resp)=>{
            const f ={loading: false}
            dispatch(HANDLE_CHANGE(f));
            if(resp &&resp.success){
                const c = {
                    label: "States",
                    datums: resp.success
                };
                let t = [c];
                 console.log(t)
                  dispatch(SET_STAT(t))
               // setState({data: t})
      
            }
          })
        
      }, []);
    return (

        <div style={{background: 'rgb(255, 255, 255)' ,borderRadius: '10px', padding: '15px',
         boxShadow: 'rgba(0, 0, 0, 0.1) 0px 3px 12px 0px', marginBottom: '24px'}}>
                 <h3 style={{color:"red"}}>Users Per State Bar Chart</h3>
            <br/>
        <div
        style={{
        display:"flex",width:"100%",height:'350px'
        }}
      >
       
    <Chart data={aa.stat} series={series} axes={axes} tooltip />
       

      </div>
      </div>
    )
  }
 
export default Search;
