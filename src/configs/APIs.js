import axios from "axios";

// URL cơ sở của API xác thực
const API_BASE_URL = "http://127.0.0.1:8000";

/**
 * Hàm đăng ký người dùng mới.
 * Endpoint: POST /auth/users/
 * @param {FormData} formData - Đối tượng FormData chứa dữ liệu đăng ký.
 * @returns {Promise<object>} - Dữ liệu người dùng đã đăng ký.
 */
export const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/users/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Hàm đăng nhập người dùng.
 * Endpoint: POST /auth/token/
 * @param {string} username - Tên đăng nhập.
 * @param {string} password - Mật khẩu.
 * @returns {Promise<object>} - Cặp access và refresh token.
 */
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/token/`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Hàm làm mới access token.
 * Endpoint: POST /auth/token/refresh/
 * @param {string} refreshToken - Refresh token hiện tại.
 * @returns {Promise<object>} - Access token mới.
 */
export const refreshToken = async (refreshToken) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/token/refresh/`, {
      refresh: refreshToken,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Hàm lấy thông tin người dùng hiện tại.
 * Endpoint: GET /auth/users/current-user/
 * @param {string} accessToken - Access token của người dùng.
 * @returns {Promise<object>} - Thông tin chi tiết của người dùng.
 */
export const getCurrentUser = async (accessToken) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/auth/users/current-user/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Hàm cập nhật hồ sơ người dùng.
 * Endpoint: PATCH /auth/users/update-profile/
 * @param {string} accessToken - Access token của người dùng.
 * @param {FormData} formData - Dữ liệu hồ sơ cần cập nhật.
 * @returns {Promise<object>} - Thông tin người dùng đã cập nhật.
 */
export const updateProfile = async (accessToken, formData) => {
  try {
    const response = await axios.patch(`${API_BASE_URL}/auth/users/update-profile/`, formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};