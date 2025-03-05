function openURL() {
    const url = 'https://raw.githubusercontent.com/QAEngin/xml/main/oryeuda.html';
}

function copyToClipboard() {
    const url = 'https://raw.githubusercontent.com/QAEngin/xml/main/oryeuda.html';

    navigator.clipboard.writeText(url).then(() => {
        alert('URL copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy URL.');
    });
}

