const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

function getAuthHeaders() {
  const token = localStorage.getItem('token');

  if (!token) {
    console.warn('⚠️ No token found in localStorage');
  }

  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
  };
}

// Fetch Projects
export async function fetchProjects() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/projects`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('❌ Fetch Projects Failed:', errorBody);
      throw new Error('Failed to fetch projects');
    }

    const data = await response.json();
    console.log('✅ Projects Fetched:', data);
    return data;
  } catch (error) {
    console.error('❌ Error in fetchProjects:', error);
    throw error;
  }
}

// Create Project
export async function createProject(data) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/projects`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('❌ Create Project Failed:', errorBody);
      throw new Error('Failed to create project');
    }

    const result = await response.json();
    console.log('✅ Project Created:', result);
    return result;
  } catch (error) {
    console.error('❌ Error in createProject:', error);
    throw error;
  }
}
