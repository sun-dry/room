
    document.getElementById('copy').addEventListener('click', () => {
    // 입력 값 수집
    const nameText = document.getElementById('name-text').innerText;
    const title = document.querySelector('input[placeholder="제목"]').value;
    const author = document.querySelector('input[placeholder="작가명"]').value;
    const depositor = document.querySelector('input[placeholder="입금자명"]').value;
    const contact = document.querySelector('input[placeholder="연락망(이메일/트위터)"]').value;
    const format = document.getElementById('bs').value;
    const spineLength = document.querySelector('input[placeholder="책등 길이"]').value;
    const flap = document.getElementById('bw').value;
    const flapLength = document.querySelector('input[placeholder="책날개 길이"]').value || 'X';
    const purpose = document.querySelector('input[placeholder="용도, 인쇄 부수"]').value;
    const deadline = document.querySelector('input[placeholder="필요 마감 날짜"]').value;
    const printer = document.querySelector('input[placeholder="인쇄소"]').value;
    const fileFormat = document.getElementById('file').value;
    const extraOptions = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
    .map((checkbox) => checkbox.nextSibling.nodeValue.trim())
    .join(', ');
    const otherRequests = document.getElementById('long').value;

    // 텍스트 생성
    const result = `
        레디메이드 이름: ${nameText}

        제목: ${title}
        작가: ${author}

        입금자명: ${depositor}
        연락망: ${contact}

        판형: ${format}

        책등 길이(mm): ${spineLength}
        책날개: ${flap}
        책날개 길이(mm): ${flapLength}

        용도, 인쇄 부수: ${purpose}

        작업 파일 확장자명: ${fileFormat}

        필요 마감 날짜: ${deadline}

        인쇄소: ${printer}
        추가 옵션: ${extraOptions || '없음'}
        기타 요구 사항: ${otherRequests || '없음'}
        `;

    // 텍스트 복사
    navigator.clipboard.writeText(result).then(() => {
    alert('내용이 복사되었습니다!');
}).catch((err) => {
    alert('복사에 실패했습니다. 다시 시도해주세요.');
    console.error(err);
});
});