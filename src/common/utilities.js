export const convertMinsToHrsMins = (mins) => {
	let h = Math.floor(mins / 60);
	let m = mins % 60;
	h = h < 10 ? "" + h : h; 
	m = m < 10 ? "0" + m : m; 
	return `${h}hr ${m}m`;
};

export const truncate = (input) => input.length > 450 ? `${input.substring(0, 530)}...` : input;
