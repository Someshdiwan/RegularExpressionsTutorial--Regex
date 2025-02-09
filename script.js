/*const contentData = {
    intro: `
        <h2>Introduction</h2>
        <p>Regular expressions (regex) are patterns used for searching, matching, and replacing text.</p>
        <p>Example: The regex <code>/hello/</code> matches the word "hello" in a string.</p>
    `,
    quickstart: `
        <h2>Quick Start</h2>
        <p>To test a regex pattern in JavaScript:</p>
        <pre><code>let str = "hello world";
let pattern = /hello/;
console.log(pattern.test(str)); // true</code></pre>
    `,
    metacharacters: `
        <h2>Meta Characters</h2>
        <p>Meta characters are special symbols with unique meanings in regex:</p>
        <ul>
            <li><code>.</code> - Matches any character</li>
            <li><code>\\d</code> - Matches any digit (0-9)</li>
            <li><code>\\w</code> - Matches any word character (a-z, A-Z, 0-9, _)</li>
            <li><code>\\s</code> - Matches any whitespace</li>
            <li><code>\\b</code> - Matches a word boundary</li>
        </ul>
    `,
    characterClasses: `
        <h2>Character Classes</h2>
        <p>Character classes allow you to match specific sets of characters:</p>
        <ul>
            <li><code>[abc]</code> - Matches 'a', 'b', or 'c'</li>
            <li><code>[^abc]</code> - Matches any character except 'a', 'b', or 'c'</li>
            <li><code>[a-z]</code> - Matches any lowercase letter</li>
            <li><code>[A-Z]</code> - Matches any uppercase letter</li>
            <li><code>[0-9]</code> - Matches any digit</li>
        </ul>
    `,
    quantifiers: `
        <h2>Quantifiers</h2>
        <p>Quantifiers define how many times a character or group should match:</p>
        <ul>
            <li><code>*</code> - Matches 0 or more times</li>
            <li><code>+</code> - Matches 1 or more times</li>
            <li><code>?</code> - Matches 0 or 1 time</li>
            <li><code>{n}</code> - Matches exactly <code>n</code> times</li>
            <li><code>{n,}</code> - Matches at least <code>n</code> times</li>
            <li><code>{n,m}</code> - Matches between <code>n</code> and <code>m</code> times</li>
        </ul>
    `,
    anchors: `
        <h2>Anchors</h2>
        <p>Anchors are used to match positions in a string:</p>
        <ul>
            <li><code>^</code> - Matches the start of a string</li>
            <li><code>$</code> - Matches the end of a string</li>
        </ul>
    `,
    examples: `
        <h2>Examples</h2>
        <p>Match an email:</p>
        <pre><code>/\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z]{2,}\\b/</code></pre>
        <p>Match a phone number:</p>
        <pre><code>/\\d{3}-\\d{3}-\\d{4}/</code></pre>
    `,
    reference: `
        <h2>Reference</h2>
        <ul>
            <li><code>\\d</code> - Matches any digit</li>
            <li><code>\\w</code> - Matches any alphanumeric character</li>
            <li><code>^</code> - Start of a string</li>
            <li><code>$</code> - End of a string</li>
            <li><code>.*</code> - Matches any character (0 or more times)</li>
        </ul>
    `
};

function loadContent(section) {
    document.getElementById("content-area").innerHTML = contentData[section] || "<h2>Content not found</h2>";
}
*/

// document.querySelectorAll('.toc a').forEach(anchor => {
//     anchor.addEventListener('click', function(event) {
//         event.preventDefault();
//         const targetId = this.getAttribute('href').substring(1);
//         document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
//     });
// });

// Content Data for dynamic loading
const contentData = {
    intro: `
        <h2>Introduction</h2>
        <p>Regular expressions (regex) are patterns used for searching, matching, and replacing text.</p>
        <p>Example: The regex <code>/hello/</code> matches the word "hello" in a string.</p>
    `,
    "basic-syntax": `
        <h2>Basic Syntax</h2>
        <p>Regex patterns consist of literals and special characters:</p>
        <ul>
            <li><code>a</code> - Matches 'a' literally</li>
            <li><code>abc</code> - Matches the exact sequence "abc"</li>
            <li><code>.</code> - Matches any single character except a newline</li>
        </ul>
    `,
    metacharacters: `
        <h2>Meta Characters</h2>
        <ul>
            <li><code>.</code> - Matches any character</li>
            <li><code>\\d</code> - Matches any digit (0-9)</li>
            <li><code>\\w</code> - Matches any word character (a-z, A-Z, 0-9, _)</li>
            <li><code>\\s</code> - Matches any whitespace</li>
            <li><code>\\b</code> - Matches a word boundary</li>
        </ul>
    `,
    "character-classes": `
        <h2>Character Classes</h2>
        <ul>
            <li><code>[abc]</code> - Matches 'a', 'b', or 'c'</li>
            <li><code>[^abc]</code> - Matches any character except 'a', 'b', or 'c'</li>
            <li><code>[a-z]</code> - Matches any lowercase letter</li>
            <li><code>[A-Z]</code> - Matches any uppercase letter</li>
            <li><code>[0-9]</code> - Matches any digit</li>
        </ul>
    `,
    quantifiers: `
        <h2>Quantifiers</h2>
        <ul>
            <li><code>*</code> - Matches 0 or more times</li>
            <li><code>+</code> - Matches 1 or more times</li>
            <li><code>?</code> - Matches 0 or 1 time</li>
            <li><code>{n}</code> - Matches exactly <code>n</code> times</li>
            <li><code>{n,}</code> - Matches at least <code>n</code> times</li>
            <li><code>{n,m}</code> - Matches between <code>n</code> and <code>m</code> times</li>
        </ul>
    `,
    anchors: `
        <h2>Anchors</h2>
        <ul>
            <li><code>^</code> - Matches the start of a string</li>
            <li><code>$</code> - Matches the end of a string</li>
        </ul>
    `,
    examples: `
        <h2>Examples</h2>
        <p>Match an email:</p>
        <pre><code>/\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z]{2,}\\b/</code></pre>
        <p>Match a phone number:</p>
        <pre><code>/\\d{3}-\\d{3}-\\d{4}/</code></pre>
    `,
    reference: `
        <h2>Reference</h2>
        <ul>
            <li><code>\\d</code> - Matches any digit</li>
            <li><code>\\w</code> - Matches any alphanumeric character</li>
            <li><code>^</code> - Start of a string</li>
            <li><code>$</code> - End of a string</li>
            <li><code>.*</code> - Matches any character (0 or more times)</li>
        </ul>
    `
};

// Load content dynamically based on section
function loadContent(section) {
    document.getElementById("content-area").innerHTML = contentData[section] || "<h2>Content not found</h2>";
}

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Live Regex Tester Function
function testRegex() {
    const regexInput = document.getElementById('regex-input').value;
    const textInput = document.getElementById('text-input').value;
    const result = document.getElementById('result');

    try {
        const regex = new RegExp(regexInput);
        result.textContent = regex.test(textInput) ? "Match Found!" : "No Match Found.";
    } catch (error) {
        result.textContent = "Invalid Regex.";
    }
}
