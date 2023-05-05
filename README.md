# Canvas Quiz to Respondus Bookmarklet

This bookmarklet tool extracts quiz data from a Canvas LMS (Learning Management System) New Quiz page and converts it into a Respondus-formatted plain text file that can be imported into a Respondus assessment tool.

## How it works

When the bookmarklet is clicked on a Canvas New Quiz page, it sends a GET request to the Canvas LMS API to retrieve the quiz data for that particular quiz. The quiz data is then parsed and converted into the Respondus format by the `convertQuizData` function.

The resulting Respondus-formatted quiz data is then downloaded to the user's computer as a plain text file by the `downloadFile` function.

Overall, this JavaScript code automates the process of manually copying and pasting quiz data from a Canvas New Quiz page into a Respondus-formatted file, saving time and effort for instructors who need to use both Canvas and Respondus for managing their course assessments.

## Usage

To start using the Canvas Quiz to Respondus bookmarklet, please follow these steps:

1. Visit [this page with the Canvas Quiz to Respondus bookmarklet](https://eacjason.github.io/New2Classic/new2Classic.html).
2. Drag and drop the "Canvas Quiz to Respondus" link on the page to your bookmarks bar.
3. Navigate to the Canvas LMS and open a New Quiz within a course.
4. Click the "Canvas Quiz to Respondus" bookmarklet in your bookmarks bar.

The bookmarklet will download a plain text file containing the quiz data in Respondus format, which can be imported into Respondus 4.0.

## Compatibility

The Canvas Quiz to Respondus bookmarklet has been tested and works with most modern browsers, including:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Apple Safari

Please note that the bookmarklet may not work with some older browsers or versions of browsers.
