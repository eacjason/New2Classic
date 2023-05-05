# New2Classic Bookmarklet

This bookmarklet is designed to convert a new quiz format into the classic quiz format, and then download the quiz data as a `.txt` file named `respondus_quiz.txt`.

## How to use the bookmarklet

1. Create a new bookmark in your browser, and set the bookmark name to "New2Classic".
2. Copy the entire JavaScript code you provided and paste it as the URL for the bookmark you just created.
3. Navigate to the quiz page you'd like to convert.
4. Click on the "New2Classic" bookmark you created earlier, and the quiz will be converted and downloaded as a `.txt` file.

## Add the bookmarklet link to your README

To allow users to drag and drop the bookmarklet link to their address bar or bookmarks toolbar, include the following HTML code in your README:

```html
<a href="javascript:your_javascript_code_here" id="New2Classic" draggable="true" ondragstart="event.dataTransfer.setData('text/plain', this.href);">New2Classic</a>
