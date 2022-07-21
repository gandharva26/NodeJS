// writing tests in postman
const response = [{ 
id: 1,
name: "The Russian",
type: "fiction",
available: true},
{
id: 2,
name: "Just as I Am",
type: "non-fiction",
available: false}
,{
id: 3,
name: "The Vanishing Half",
type: "fiction",
available: true}
,{
name: "Untamed",
type: "non-fiction",
available: true
}]
books = []
fiction_books = []
response.forEach((book) => books.push(book.name))
console.log(books)
fiction_books = response.filter((book) => book.type == "fiction")
book = fiction_books[0]
console.log(fiction_books)
pm.test("books are fiction and available", () => {
    pm.expect(book).to.be.an('Object')
    pm.expect(book.available).to.eql(true)
    pm.expect(book.type).to.eql("fiction")
})