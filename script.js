// 예약 양식 제출 시 처리
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 동작(페이지 새로고침) 방지

    // 입력된 데이터 가져오기
    const patientName = document.getElementById('patientName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;

    // 예약 정보 출력
    const appointmentDetails = `
        <h3>예약 세부 정보</h3>
        <p><strong>환자 성명:</strong> ${patientName}</p>
        <p><strong>전화번호:</strong> ${phoneNumber}</p>
        <p><strong>진료 날짜:</strong> ${appointmentDate}</p>
        <p><strong>진료 시간:</strong> ${appointmentTime}</p>
    `;

    // 예약 성공 메시지 표시
    Swal.fire({
        icon: 'success',
        title: '예약 완료!',
        html: appointmentDetails,
        confirmButtonText: '확인'
    });

    // 폼 초기화
    document.getElementById('appointmentForm').reset();
});
