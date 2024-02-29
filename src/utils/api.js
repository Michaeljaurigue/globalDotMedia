const baseUrl =
    process.env.NODE_ENV === "production"
        ? "https://api.globaldotmedia.com"
        : "http://localhost:3001";

const processServerResponse = (res) => {
    if (res.ok) {
        try {
            return res.json();
        } catch (error) {
            return Promise.reject(`Error parsing response: ${error}`);
        }
    } else {
        return Promise.reject(`Network error: ${res.status} - ${res.statusText}`);
    }
};

export async function request(url, options) {
    const res = await fetch(url, options);
    return processServerResponse(res);
}

// Existing functions
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

function checkToken(token) {
    return request(`${baseUrl}/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    });
}


// New functions for login and signup
function login(email, password) {
    return request(`${baseUrl}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });
}

function signup(name, email, password) {
    return request(`${baseUrl}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
    });
}

const api = {
    request,
    getAllBlogs,
    getOneBlogById,
    login,
    signup,
    checkToken,
};

export default api;
