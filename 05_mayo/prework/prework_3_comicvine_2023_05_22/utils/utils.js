export const getIssues = async (title) => {
	const data = await fetch(
		`https://comicvine.gamespot.com/api/issues/?api_key=1855f15320d3311c517d1637afde72fd1a4c8c69&format=json&limit=30&filter=name:${title}`
	);
	const dataJSON = await data.json();
	return dataJSON;
};
