function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const uploadMessage = document.getElementById('uploadMessage');

    if (fileInput.files.length === 0) {
        uploadMessage.innerText = 'Please select a file to upload.';
        uploadMessage.style.color = 'red';
        return;
    }

    uploadMessage.innerText = '⚠️ Direct file upload not supported on GitHub Pages. Please upload files manually to the repository.';
    uploadMessage.style.color = 'orange';
}
