import type { Actions, PageServerLoad } from './$types';
import { kv } from '$lib/server/kv';
import { nanoid } from 'nanoid';

export type Post = {
	id: string;
	title: string;
	content: string;
	date: string;
};

export const load: PageServerLoad = async () => {
	const posts = await kv.keys('post:*').then(async (keys) => {
		return await Promise.all(
			keys.map(async (key) => {
				const post = await kv.get<Post>(key);
				if (!post) return null;

				return post;
			})
		);
	});

	return {
		posts: posts
			.filter((post): post is Post => post !== null)
			.sort((a, b) => (a.date > b.date ? -1 : 1))
	};
};

export const actions = {
	createPost: async ({ request }) => {
		const form = await request.formData();
		const id = nanoid();
		const title = form.get('title') as string;
		if (!title) {
			return {
				success: false,
				error: 'Title is required'
			};
		}
		const content = form.get('content') as string;
		const date = new Date().toISOString();

		await kv.set(`post:${id}`, JSON.stringify({ id, title, content, date }));

		return {
			message: `Created post with id: ${id}`,
			success: true,
			id
		};
	},
	deletePost: async ({ request }) => {
		const form = await request.formData();
		const id = form.get('id') as string;
		if (!id) {
			return {
				message: 'Id is required',
				success: false
			};
		}

		const success = (await kv.del(`post:${id}`)) > 0;
		return {
			message: 'Post deleted',
			success
		};
	}
} satisfies Actions;
