import { nanoid } from 'nanoid';

export type Disposable = {
	data: string;
	isRedirect: boolean;
};

const disposables: Record<string, Disposable> = {};

export const getDisposable = (id: string): Disposable | null =>
	id in disposables ? disposables[id] : null;

export const deleteDisposable = (id: string): void => {
	delete disposables[id];
	console.log('Deleted disposable', id);
};

export const saveDisposable = (data: Disposable): string => {
	const id = nanoid();
	disposables[id] = data;
	console.log('Saved disposable', id);
	return id;
};
