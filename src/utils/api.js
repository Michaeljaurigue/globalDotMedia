const baseUrl =
    process.env.NODE_ENV === "production"
        ? "https://api.globaldotmedia.com"
        : "http://localhost:3001";

//deployed-backend-url is a URL to your deployed back end

// const baseUrl = "http://localhost:3001";

const processServerResponse = (res) => {
    if (res.ok) {
        try {
            return res.json();
        } catch (error) {
            return Promise.reject(`Error parsing response: ${error}`);
        }
    } else {
        return Promise.reject(`Network error: ${res.status}`);
    }
};

export async function request(url, options) {
    const res = await fetch(url, options);
    return processServerResponse(res);
}

function getAllBlogs() {
    return request(`${baseUrl}/`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
}

function getOneBlogById(id) {
    return request(`${baseUrl}/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
}



const api = {
    request,
    getAllBlogs,
    getOneBlogById,
};

export default api;
