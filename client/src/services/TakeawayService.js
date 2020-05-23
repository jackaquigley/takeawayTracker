const baseURL = 'http://localhost:3000/api/takeaways/'

export default {
  getOrders() {
    return fetch(baseURL)
    .then(res => res.json())
  },

  postOrder(payload) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },

  deleteOrder(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  }
}
