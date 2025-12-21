document.getElementById('calculateBtn').addEventListener('click', function() {
    // --- Phần lấy dữ liệu và tính toán (Giống hệt cũ) ---
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let resultDiv = document.getElementById('result');

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Nhập số đàng hoàng đi bạn ơi! 😠");
        return;
    }

    let bmi = (weight / (height * height)).toFixed(2);
    let message = "";
    let imageUrl = "";

    // --- Phần chọn ảnh (Giống hệt cũ) ---
    if (bmi < 18.5) {
        message = "Hơi gầy nha, gió thổi bay đó! 🍃";
        imageUrl = "https://cdn-icons-png.flaticon.com/512/3048/3048368.png";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        message = "Dáng chuẩn siêu mẫu, tuyệt vời! 😎";
        imageUrl = "https://cdn-icons-png.flaticon.com/512/1754/1754726.png";
    } else if (bmi >= 25 && bmi < 29.9) {
        message = "Hơi 'chúp pi' rồi nha, nhìn cưng nhưng bớt ăn lại! 🍔";
        imageUrl = "https://cdn-icons-png.flaticon.com/512/5350/5350974.png";
    } else {
        message = "Báo động! Lăn nhanh hơn đi rồi đó! 🆘";
        imageUrl = "https://cdn-icons-png.flaticon.com/512/3132/3132732.png";
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