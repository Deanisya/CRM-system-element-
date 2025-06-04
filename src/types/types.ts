export interface Calls {
	id: string;
	date: string;
	time: string;
	responsible: string;
	type: 'входящий' | 'исходящий';
	priority: 'обычный' | 'срочный';
}

export interface CallsList {
	list: Calls[];
}
