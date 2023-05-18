import {createApi} from "unsplash-js";

const unsplash = createApi({
	accessKey: import.meta.env.VITE_UNSPLASH_API_KEY,
});

export const searchPhotos = async (keyword) => {
	const photos = await unsplash.search.getPhotos({
		query: keyword,
		page: 1,
		perPage: 12,
	});
	return photos;
};
