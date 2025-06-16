// import apiClient from '../lib/axios'; // Sẽ dùng khi có API thật

// Hàm giả lập gọi API đăng nhập
export const loginApi = async (credentials) => {
  console.log('Đang gọi API đăng nhập với:', credentials);
  // Giả lập độ trễ mạng
  await new Promise(resolve => setTimeout(resolve, 500));

  // Giả lập logic kiểm tra
  if (credentials.password === '123') {
    return { success: true, user: { email: credentials.email } };
  } else {
    return { success: false, message: 'Sai mật khẩu' };
  }
};