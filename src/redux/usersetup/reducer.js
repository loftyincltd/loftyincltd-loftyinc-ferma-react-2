const initialState = {
	form: {
      loading: false,
	  q:''
	},
	q_form: {
	
	  }
};

export default function userSetupReducer(state = initialState, { type, payload }) {
	
	switch (type) {
		
		case 'HANDLE_CHANGE':
			 const form = { ...state, form: { ...state.form, ...payload}}
			return form;

			case 'HANDLE_CHANGE_Q':
				const q_form = { ...state, q_form: { ...state.q_form, ...payload}}
			   return q_form;

			   case 'CLEAR_Q':
				const form2 = { ...state, q_form: {}}
			   return form2;	

			case 'CLEAR':
				const form1 = { ...state, form: {loading: false, q:'', download: undefined}}
			   return form1;	
			
		default:
			return state;
	}
	
}