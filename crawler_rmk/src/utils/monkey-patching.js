(function () {
  if (!Array.prototype.last) {
    Array.prototype.last = function() {
      return this[this.length - 1]
    }
  }

  if (!Array.prototype.first) {
    Array.prototype.first = function() {
      return this[0]
    }
  }

  if (!String.prototype.toInt) {
    String.prototype.toInt = function() {
      if (/^\d+$/.test(this)) {
        return parseInt(this)
      }
      return 0
    }
  }
})()

module.exports = 1
