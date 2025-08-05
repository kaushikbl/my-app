// src/api.js
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export function fetchProjects() {
  return fetch(`${API_BASE_URL}/api/projects`).then(res => res.json());
}

export function createProject(data) {
  return fetch(`${API_BASE_URL}/api/projects`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}
