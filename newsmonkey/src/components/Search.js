
import React, { Component } from 'react'

export default class Search extends Component {
  constructor()
  { super()
    this.state = {
      text : ""
    }
  }

  render() {
    return (
      <div>
            <div class="container-fluid">
    <form class="d-flex" role="search">
      <input  value={this.text} class="form-control me-2" type="search" placeholder="Search the news" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit" >Search</button>
    </form>
  </div>

      </div>
    )
  }
}
