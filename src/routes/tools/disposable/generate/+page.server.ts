import { saveDisposable } from '@/server/disposable';
import type { Actions } from './$types';
import { error } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const qrData = data.get('data') as string;
		const isRedirect = data.get('redirect') === 'on';
		console.log(data.get('redirect'));
		if (!qrData) {
			return error(400, 'No data provided');
		}

		const id = saveDisposable({ data: qrData, isRedirect });
		return { success: true, id };
	}
} satisfies Actions;
