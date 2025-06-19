const mockProjects = [
    {
        id: 1,
        date: 'Tháng 6, 2025',
        title: 'Cuộc thi Đại sứ Môi trường',
        description: 'Tìm kiếm những gương mặt sinh viên tiên phong, có ảnh hưởng và những dự án đột phá trong lĩnh vực bảo vệ môi trường.',
        type: 'Sự kiện Đặc biệt',
        image: 'https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/507983227_1133859858788764_6026514188119547483_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4VJUthS3ywIQ7kNvwFUg3Ba&_nc_oc=AdlbReV8oFvGkSHpSnmUDrWXKWsD3R3wpEN5EXrbGnv-k_nQ1KFECCiJ3kwsFJUPA1g&_nc_zt=23&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=mvc8kvZsBxMxgUAAz1bW3Q&oh=00_AfO5l09J7gmxPEkX_ecEHSiyshAWosFbDvZZuy2eR1hN_A&oe=68596934', // Hình ảnh về sinh viên tham gia hoạt động
        content: 'Đây là nội dung chi tiết của cuộc thi Đại sứ Môi trường, nơi các bạn sinh viên thể hiện tài năng và nhiệt huyết của mình...'
    },
    {
        id: 2,
        date: 'Tháng 2, 2025',
        title: 'Sự kiện OU Green+ Tour',
        description: 'Một chuỗi trạm thông tin và hoạt động tương tác nhằm thúc đẩy lối sống xanh và bền vững trong cộng đồng sinh viên OU.',
        type: 'Hoạt động Sinh viên',
        image: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/487441513_1075711137936970_8847140643265317979_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9wUkVOrKWV4Q7kNvwHW919E&_nc_oc=Adlkuo2Aa5gwPCEXP3ol58sljR8gonvAWXNQry5w1CZ-wPAjJ89Qz7G58H337dPWl9Y&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=ljfNBWva2BQspRR7vAVwUQ&oh=00_AfOedPGo7UdYm6FP1PRlvRc5ntGQ7kYeyQ3t1MQz3QMclQ&oe=68598709', // Hình ảnh về tour và hoạt động ngoài trời
        content: 'Nội dung chi tiết về sự kiện OU Green+ Tour...'
    },
    {
        id: 3,
        date: 'Tháng 12, 2024',
        title: 'Ấn Xanh 2025',
        description: 'Hoạt động tình nguyện thường niên nhân dịp Tết đến, mang những món quà và sự sẻ chia ấm áp đến các hoàn cảnh khó khăn.',
        type: 'Hoạt động Tình nguyện',
        image: 'https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/484754335_1065763585598392_2895860288949071959_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=spJ-oGEiOTEQ7kNvwEbRX8O&_nc_oc=AdkermIrMUtvCWlwaKfkBmoQSCUIFl9QTTmpp5ZLnylvms-wn_rZxrwH4wg-LH5rwoc&_nc_zt=23&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=ZwJQvPUbC2tYlf3qMYNwJw&oh=00_AfMoEhDz5rV3M4RNUVgVWR50CkgC_SisfJftOekXomMtPw&oe=685982F0', // Hình ảnh về hoạt động tình nguyện
        content: 'Nội dung chi tiết về hoạt động Ấn Xanh 2025...'
    },
    {
        id: 4,
        date: 'Tháng 9, 2024',
        title: 'Sự kiện OU Thanks',
        description: 'Tổ chức các hoạt động ý nghĩa nhằm tri ân cộng đồng, các đối tác và những người đã luôn ủng hộ hành trình của CLB.',
        type: 'Tri ân Cộng đồng',
        image: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/484796276_1064175082423909_1664090190309311164_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WMaS611m6ogQ7kNvwHaelWT&_nc_oc=Adl-JIHsIJxPkwuZ-U0_Tal3jGD1A2i2ytuE29is4qNSwNbLIPO-S-Yr0KJi4TR8iSU&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=CB8N3tQERZMYHc0NpGLuzw&oh=00_AfNyukD_e4NgVnEzmXY2aTdddjuT-Pu_InaT8ZSqIToKdA&oe=68597E53', // Hình ảnh về cộng đồng
        content: 'Nội dung chi tiết về sự kiện OU Thanks...'
    }
];

const mockNews = [
    {
        id: 1,
        category: 'Môi trường',
        date: '15/06/2025',
        title: 'Chiến dịch "Chủ nhật Xanh": Khi hành động nhỏ tạo nên thay đổi lớn',
        description: 'Đều đặn mỗi tuần, màu áo xanh của sinh viên OU lại phủ khắp các công viên, tuyến đường để thu gom rác thải, lan tỏa thông điệp sạch.',
        content: 'Không cần những hành động vĩ mô, chiến dịch "Chủ nhật Xanh" của CLB OU Green Plus là minh chứng cho việc tình yêu môi trường bắt nguồn từ những điều bình dị nhất...',
        image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2940' // Hình ảnh về hoạt động ngoài trời
    },
    {
        id: 2,
        category: 'Cộng đồng',
        date: '12/05/2025',
        title: 'Nhìn lại hành trình Mùa Hè Xanh 2024 đầy cảm xúc',
        description: 'Một tháng tình nguyện tại các vùng quê khó khăn đã để lại vô vàn kỷ niệm và những công trình ý nghĩa cho bà con.',
        content: 'Chiến dịch Mùa Hè Xanh 2024 của sinh viên trường ĐH Mở TP.HCM đã khép lại với nhiều thành công rực rỡ...',
        image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2940' // Hình ảnh về tình nguyện mùa hè
    },
    {
        id: 3,
        category: 'Môi trường',
        date: '28/04/2025',
        title: 'Green+ Tour: Hành trình lan tỏa lối sống xanh trong giảng đường',
        description: 'Chuỗi trạm thông tin và trò chơi tương tác của OU Green Plus đã thu hút hàng ngàn sinh viên tham gia và cam kết hành động.',
        content: 'Với mô hình độc đáo, Green+ Tour đã "phủ xanh" các cơ sở của trường ĐH Mở...',
        image: 'https://images.unsplash.com/photo-1472653431158-6364773b2a56?q=80&w=2940' // Hình ảnh về tour giáo dục
    },
    {
        id: 4,
        category: 'Môi trường',
        date: '22/04/2025',
        title: 'Ngày Trái Đất: Đổi rác điện tử lấy cây xanh',
        description: 'Hưởng ứng Ngày Trái Đất, OU Green Plus tổ chức ngày hội thu gom pin, thiết bị điện tử cũ và đổi lấy cây sen đá.',
        content: 'Rác thải điện tử là một vấn đề nhức nhối. Ngày hội đã thu gom hàng trăm viên pin, điện thoại cũ, dây sạc... một cách an toàn.',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2940' // Hình ảnh về tái chế
    },
    {
        id: 5,
        category: 'Cộng đồng',
        date: '10/03/2025',
        title: 'Tọa đàm "Net Zero và vai trò của người trẻ"',
        description: 'Buổi tọa đàm với các chuyên gia hàng đầu đã cung cấp cho sinh viên góc nhìn sâu sắc về mục tiêu Net Zero.',
        content: 'Sự kiện đã thắp lên ngọn lửa nhiệt huyết, thôi thúc người trẻ hành động vì một tương lai bền vững...',
        image: 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?q=80&w=2940' // Hình ảnh về hội thảo
    },
    {
        id: 6,
        category: 'Cộng đồng',
        date: '20/01/2025',
        title: 'Chương trình "Xuân Tình Nguyện" mang Tết về vùng cao',
        description: 'Những món quà và sự sẻ chia ấm áp đã được các tình nguyện viên mang đến cho bà con và trẻ em vùng sâu vùng xa.',
        content: 'Với mong muốn không để ai bị bỏ lại phía sau, chương trình "Xuân Tình Nguyện" đã được tổ chức thành công tốt đẹp...',
        image: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=2940' // Hình ảnh về hoạt động từ thiện
    },
    {
        id: 7,
        category: 'Môi trường',
        date: '15/11/2024',
        title: 'Workshop "Tái chế thông minh": Sáng tạo từ vật liệu cũ',
        description: 'Sinh viên hào hứng tham gia buổi workshop biến chai nhựa, giấy báo cũ thành những vật dụng trang trí độc đáo và hữu ích.',
        content: 'Dưới sự hướng dẫn của các chuyên gia, những vật liệu tưởng chừng bỏ đi đã được "hồi sinh" thành các sản phẩm đẹp mắt...',
        image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2940' // Hình ảnh về workshop tái chế
    },
    {
        id: 8,
        category: 'Cộng đồng',
        date: '01/10/2024',
        title: 'Chương trình "Trung thu cho em" tại mái ấm tình thương',
        description: 'Những chiếc lồng đèn, những phần bánh kẹo và những nụ cười rạng rỡ đã được trao đến các em nhỏ có hoàn cảnh đặc biệt.',
        content: 'Một mùa Trung thu nữa lại về, và CLB OU Green Plus đã mang một không khí lễ hội ấm áp đến với các em nhỏ...',
        image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2940' // Hình ảnh về trẻ em vui chơi
    },
    {
        id: 9,
        category: 'Môi trường',
        date: '05/06/2024',
        title: 'Hưởng ứng Ngày Môi trường Thế giới tại Cần Giờ',
        description: 'Hàng trăm sinh viên đã cùng nhau thu gom rác thải, làm sạch nhiều km bờ biển và trồng cây ngập mặn.',
        content: 'Để hưởng ứng Ngày Môi trường Thế giới, một hoạt động quy mô lớn đã được tổ chức tại khu dự trữ sinh quyển Cần Giờ...',
        image: 'https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?q=80&w=2940' // Hình ảnh về bảo vệ môi trường biển
    },
    {
        id: 10,
        category: 'Môi trường',
        date: '25/05/2024',
        title: 'Phát động cuộc thi "Sáng kiến Xanh" trong sinh viên',
        description: 'Cuộc thi tìm kiếm và ươm mầm các dự án, ý tưởng đột phá của sinh viên nhằm giải quyết các vấn đề môi trường.',
        content: 'Đây là sân chơi để các bạn sinh viên thể hiện ý tưởng của mình, từ các ứng dụng công nghệ đến các mô hình kinh doanh bền vững...',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2940' // Hình ảnh về sáng tạo và đổi mới
    }
];

// API simulation functions
const fakeApiCall = (data) => new Promise(resolve => setTimeout(() => resolve(data), 300));

// Export functions
export const getAllNews = () => fakeApiCall(mockNews);
export const getNewsById = (id) => fakeApiCall(mockNews.find(n => n.id === parseInt(id)));
export const getAllProjects = () => fakeApiCall(mockProjects);
export const getProjectById = (id) => fakeApiCall(mockProjects.find(p => p.id === parseInt(id)));