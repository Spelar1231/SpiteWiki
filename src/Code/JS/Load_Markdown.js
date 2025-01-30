import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

async function loadMarkdown(md_link) {
    try {
        const response = await fetch(md_link);
        if (!response.ok) {
            // noinspection ExceptionCaughtLocallyJS
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            const md_content = await response.text();
            document.getElementById('Markdown_text').innerHTML = marked.parse(md_content);
        }
    } catch (error) {
        const errorMessage = `# An unexpected error has occurred. Please contact @almaa_1 on Discord.\n\n${error}`;
        document.getElementById('Markdown_text').innerHTML = marked.parse(errorMessage);
        console.error('Error loading Markdown:', error);
    }
}
loadMarkdown('https://raw.githubusercontent.com/Spelar1231/SpiteWiki/refs/heads/main/src/Docs/Components/Components_List.md');

export async function loadMarkdownFromJSON(key) {
    try {
        // Fetch the JSON file containing links
        const jsonResponse = await fetch('links.json');
        if (!jsonResponse.ok) {
            throw new Error(`HTTP error! status: ${jsonResponse.status}`);
        }

        // Parse JSON data
        const jsonData = await jsonResponse.json();
        const md_link = jsonData.markdownLinks[key];  // Get the desired link

        if (!md_link) {
            throw new Error(`Markdown link for "${key}" not found in JSON.`);
        }

        // Fetch the markdown content
        const response = await fetch(md_link);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const md_content = await response.text();
        document.getElementById('Markdown_text').innerHTML = marked.parse(md_content);
    } catch (error) {
        const errorMessage = `# An unexpected error has occurred. Please contact @almaa_1 on Discord.\n\n${error}`;
        document.getElementById('Markdown_text').innerHTML = marked.parse(errorMessage);
        console.error('Error:', error);
    }
}
