
window.addEventListener('DOMContentLoaded', function () {
    const sourceHTML = `
                <!-- source.html -->
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Source Page</title>
                    <style>
                        body {
                            background-color: lightgray;
                        }
                    </style>
                </head>
                <body>
                    <h1>This is the Source Page</h1>
                    <script>
                        console.log('Script from source page executed.');
                    </script>
                </body>
                </html>
            `;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = sourceHTML;

    // Append style and script tags to the head of destination.html
    const styleTags = tempDiv.querySelectorAll('style');
    styleTags.forEach(styleTag => {
        document.head.appendChild(styleTag.cloneNode(true));
    });

    const scriptTags = tempDiv.querySelectorAll('script');
    scriptTags.forEach(scriptTag => {
        const newScript = document.createElement('script');
        newScript.innerHTML = scriptTag.innerHTML;
        document.head.appendChild(newScript);
    });
});
