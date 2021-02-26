export function HANDLE_CHANGE(payload) {
	return {
		type: 'HANDLE_CHANGE',
		payload
	};
}
export function CLEAR() {
	return {
		type: 'CLEAR',

	};
}

export function HANDLE_CHANGE_Q(payload) {
	return {
		type: 'HANDLE_CHANGE_Q',
		payload
	};
}
export function CLEAR_Q() {
	return {
		type: 'CLEAR_Q',

	};
}


export function USER_ADD(payload) {
	return {
		type: 'USER_ADD',
		payload
	};
}

export function USER_ADD_Q(payload) {
	return {
		type: 'USER_ADD_Q',
		payload
	};
}
export function USER_UPDATE(payload) {
	return {
		type: 'USER_UPDATE',
		payload
	};
}
export function ADMIN_ADD(payload) {
	return {
		type: 'ADMIN_ADD',
		payload
	};
}

export function PROJECT_ADD(payload) {
	return {
		type: 'PROJECT_ADD',
		payload
	};
}

export function FETCH_ADMIN(payload) {
	return {
		type: 'FETCH_ADMIN',
		payload
	};
}

export function FETCH_USER(payload) {
	return {
		type: 'FETCH_USER',
		payload
	};
}

export function PASSWORD_CHANGE(payload) {
	return {
		type: 'PASSWORD_CHANGE',
		payload
	};
}

export function FETCH_PROJECT(payload) {
	return {
		type: 'FETCH_PROJECT',
		payload
	};
}
export function FETCH_WORKER(payload) {
	return {
		type: 'FETCH_WORKER',
		payload
	};
}

export function WORKER_ADD(payload) {
	return {
		type: 'WORKER_ADD',
		payload
	};
}

export function WORKER_VERIFY(payload) {
	return {
		type: 'WORKER_VERIFY',
		payload
	};
}

export function FINGERPRINT_ADD(payload) {
	return {
		type: 'FINGERPRINT_ADD',
		payload
	};
}
export function DELETE_ADMIN(payload) {
	return {
		type: 'DELETE_ADMIN',
		payload
	};
}

export function DELETE_WORKER(payload) {
	return {
		type: 'DELETE_WORKER',
		payload
	};
}