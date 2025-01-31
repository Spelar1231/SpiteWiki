import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

export async function loadMarkdownFromJSON(category, key) {
    try {
        const jsonResponse = await fetch('../../JSON/links.json');
        if (!jsonResponse.ok) {
            throw new Error(`HTTP error! status: ${jsonResponse.status}`);
        }

        const jsonData = await jsonResponse.json();
        // exception ignore
          const md_link = jsonData.markdown_links[category][key];

        if (!md_link) {
            throw new Error(`Markdown link for "${category}"/"${key}" not found in JSON.`);
        }

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
