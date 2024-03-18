let BookInstance = require('../models/bookinstance')

exports.show_all_books_status = function (res) {
  BookInstance.find({ status: { $eq: 'Available' } })
    .populate('book')
    .exec()
    .then((list) => {
      res.send(
        list.map(function (bookInstance) {
          return bookInstance.book.title + ' : ' + bookInstance.book.status
        })
      )
    })
}
