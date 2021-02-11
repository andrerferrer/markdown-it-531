// 1. import the plugin
import MarkdownIt from 'markdown-it';

// 2. create the function
const initMarkdownIt = ()  => {
  const textarea = document.getElementById('editor');
  const preview = document.getElementById('preview');
  const markdown = new MarkdownIt();
  textarea.addEventListener('keyup', (event) => {
    const html = markdown.render(textarea.value);
    preview.innerHTML = html;
  });
};

// 3. export the function'
export { initMarkdownIt };
