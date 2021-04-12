
export const callApi = () => {

    return({
        composeUrl: (url) => (path) => `${url}/${path}`,
        callFn: async(url) => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });
}
