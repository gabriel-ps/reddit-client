import moment from 'moment'

export default class Post {
  constructor (data) {
    this.bind(data)
  }

  bind (data) {
    Object.keys(data).forEach((key) => {
      this[key] = data[key]
    })
  }

  get uniqueId () {
    return this.name
  }

  get title () {
    return this.data.title
  }

  get author () {
    return this.data.author
  }

  get thumbnail () {
    return {
      url: this.data.thumbnail,
      width: this.data.thumbnail_width,
      height: this.data.thumbnail_height
    }
  }

  get relativeCreatedTime () {
    return moment(this.data.created_utc, 'X').fromNow()
  }
}
