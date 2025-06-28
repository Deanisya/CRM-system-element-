export interface Calls {
	id: string;
	date: string;
	time: string;
	responsible: string;
	type: 'входящий' | 'исходящий';
	priority: 'обычный' | 'срочный';
	isManualPriority?: boolean;
}

export interface CallsList {
	list: Calls[];
}
