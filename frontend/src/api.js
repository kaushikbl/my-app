const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function getAuthHeaders() {
  const token = localStorage.getItem('token'); // Or sessionStorage, or from context
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
}

export async function fetchProjects() {
  console.log(" inside fetch projects function");
  const url = "https://example.org/products.json";
  const response = await fetch(url);
  console.log(response);
  // return fetch(`${API_BASE_URL}/api/projects`, {
  // return fetch("https://dummyjson.com/products", {
  //   headers: getAuthHeaders(),
  // }).then(res => {
  //   if (!res.ok) {
  //     throw new Error('Failed to fetch projects');
  //   }
  //   return res.json();
  // });
}

export function createProject(data) {
  return fetch(`${API_BASE_URL}/api/projects`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  }).then(res => {
    if (!res.ok) {
      throw new Error('Failed to create project');
    }
    return res.json();
  });
}
