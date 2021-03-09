const initialState = {
  aside: { which: '', data: {}},
  user_token: null,
  filter_type:'search',
  user: {},
  admins:[],
  users:[],
  workers:[],
  filtered_users:[],
  queued_users:[],
  queued_fingerprints:[],
  projects:[],
  current_admin:{},
  current_user:{},
  stat: [ {
    label: "States",
    datums:[{}]
  },
],
  current_project:{},
  form: {
  },
  tab:{ current: 0, list:[]}
};

export default function applicationReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'HANDLE_CHANGE':
      const form = { ...state, form: { ...state.form, ...payload}}
     return form;
    case 'OPEN_ASIDE':
      const aside = { ...state, aside: payload };
      return aside;
      case 'CLOSE_ASIDE':
        const aside2 = { ...state, aside: {which:''} };
        return aside2;  
    case 'CHANGE_CURRENT_TAB':
        const tab =  { ...state, tab: { ...state.tab, ...payload}}
        return tab;  
    case 'SET_ADMIN':
        const current_admin = { ...state, current_admin: payload };
        return current_admin;
    case 'SET_ADMINS':
          const admins = { ...state, admins: payload };
          return  admins; 
    case 'SET_USER':
            const current_user = { ...state, current_user: payload };
            return current_user;

            case 'SET_STAT':
              console.log(payload)
              const stat = { ...state, stat: payload };
              return stat;         

      case 'SET_PROJECT':
              const current_project = { ...state, current_project: payload };
              return current_project;        
        case 'SET_USERS':
              const users = { ...state, users: payload };
              return  users;  
              case 'SET_WORKERS':
                const workers = { ...state, workers: payload };
                return  workers;          
     case 'SET_FILTERED_USERS':
                const fil_users = { ...state, filtered_users: payload };
                return  fil_users; 
                case 'SET_QUEUED_USERS':
                  const  queued_users = { ...state,  queued_users: payload };
                  return   queued_users;  
                  case 'SET_QUEUED_FINGERPRINTS':
                    const  queued_fingerprints = { ...state, queued_fingerprints: payload };
                    return   queued_fingerprints;                        
   case 'SET_PROJECTS':
    const projects = { ...state, projects: payload };
      return  projects;          
    case 'LOGIN':
      const user = { ...state, ...payload };
      return user;
      case 'SET_FILTER_TYPE':
        const f = { ...state, filter_type: payload };
        return f; 

    default:
      return state;
  }
}
