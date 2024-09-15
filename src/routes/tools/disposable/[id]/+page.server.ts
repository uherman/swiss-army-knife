import { deleteDisposable, getDisposable } from '@/server/disposable';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const disposable = getDisposable(params.id);
	if (!disposable) {
		return {
			status: 404,
			error: 'Disposable not found'
		};
	}

	deleteDisposable(params.id);

	if (disposable.isRedirect) {
		console.log('Redirecting to', disposable.data);
		throw redirect(307, disposable.data);
	}

	return {
		id: params.id,
		disposable: disposable
	};
};
