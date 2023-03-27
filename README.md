# ISBN-Barcode-Scanner

An ISBN Barcode Scanner demo web app using [Dynamsoft Barcode Reader](https://www.dynamsoft.com/barcode-reader/overview/) and [Dynamsoft Camera Enhancer](https://www.dynamsoft.com/camera-enhancer/overview/).

What can it does:

1. Scan ISBN barcode with add-on support.
2. Query the book's info through the [OpenLibrary's API](https://openlibrary.org/dev/docs/api/books).
3. Get the book's price via its add-on code and calculate the total price of scanned books.
4. Export the data to a CSV file.
5. Save the data into IndexedDB and load the data from IndexedDB.

[Online demo](https://tony-xlh.github.io/ISBN-Barcode-Scanner/)