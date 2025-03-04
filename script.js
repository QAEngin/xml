function downloadXML() {
    const url = 'https://raw.githubusercontent.com/QAEngin/xml/main/oryeuda.xml';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch file: ${response.statusText}`);
            }
            return response.text();
        })
        .then(xmlText => {
            const blob = new Blob([xmlText], { type: 'application/xml' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'contacts.xml';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(error => {
            alert('Failed to download file: ' + error.message);
            console.error(error);
        });
}
