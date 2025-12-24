document.getElementById('calculateBtn').addEventListener('click', function() {
    // --- Phần lấy dữ liệu và tính toán (Giống hệt cũ) ---
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let resultDiv = document.getElementById('result');

    // let clickSound = new Audio('./asset/audio/Thầy Giáo Ba với điệu cười ám ảnh - Haunting smile - Tiếng cười - YouTube.mp3');
    // clickSound.play();

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Nhập số đàng hoàng đi bạn ơi! 😠");
        return;
    }

    let bmi = (weight / (height * height)).toFixed(2);
    let message = "";
    let imageUrl = "";
    
    // --- Phần chọn ảnh (Giống hệt cũ) ---
    if (bmi < 18.5) {
        message = " GAY quá đấy :))";
        imageUrl = "./asset/img/anhGay.jpg";
        new Audio('./asset/audio/Gay ay ay ay ay - Voice in Head - Gay Echo sound effect TikTok - Instagram Reels free Download link - YouTube.mp3').play();
    } else if (bmi >= 18.5 && bmi < 24.9) {

        message = "Dáng ngon vãi chương:>> ";
        imageUrl = "./asset/img/anhcandoi.jpg";
        new Audio('./asset/audio/ối dồi ôi -- sound effects - YouTube.mp3').play();

    } else if (bmi >= 25 ) {
        message = " 'Chúp piiiii' ";
        imageUrl = "./asset/img/anhbeo.jpg";
        new Audio('./asset/audio/Uii Uiiiii (HD) Sound effect - YouTube.mp3').play();
    }

    // --- PHẦN MỚI: Tạo nội dung Popup ---
    
    // Chúng ta tạo thêm một cái div class="popup-content" bọc bên ngoài
    // Và thêm một cái nút X (span id="closeBtn") để tắt
    resultDiv.innerHTML = `
        <div class="popup-content">
            <span id="closeBtn" class="close-btn">&times;</span>
            <h3 style="color: red; margin-top:0;">BMI: ${bmi}</h3>
            <img src="${imageUrl}" alt="Kết quả" class="result-image" style="max-height: 150px;">
            <p style="font-size: 18px; font-weight: bold; margin-top: 15px;">${message}</p>
        </div>
    `;
    
    // Hiện popup lên
    resultDiv.classList.add('show');

    // --- PHẦN MỚI: Xử lý nút Đóng (X) ---
    // Khi bấm vào dấu X thì xóa class 'show' đi để nó ẩn lại
    document.getElementById('closeBtn').addEventListener('click', function() {
        resultDiv.classList.remove('show');
    });

    // (Tùy chọn) Bấm ra ngoài vùng đen cũng đóng luôn cho tiện
    resultDiv.addEventListener('click', function(e) {
        if (e.target === resultDiv) {
            resultDiv.classList.remove('show');
        }
    });
});