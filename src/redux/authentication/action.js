export function HANDLE_CHANGE(payload) {
	return {
		type: 'HANDLE_CHANGE',
		payload
	};
}
export function SIGN_UP(payload) {
	return {
		type: 'SIGN_UP',
		payload
	};
}
export function SIGN_IN(payload) {
	return {
		type: 'SIGN_IN',
		payload
	};
}
export function VERIFY_OTP(payload) {
	return {
		type: 'VERIFY_OTP',
		payload
	};
}
export function RESEND_OTP(payload) {
	return {
		type: 'RESEND_OTP',
		payload
	};
}
export function SEND_OTP(payload) {
	return {
		type: 'SEND_OTP',
		payload
	};
}

export function GET_MY_DETAILS(payload) {
	return {
		type: 'GET_MY_DETAILS',
		payload
	};
}
