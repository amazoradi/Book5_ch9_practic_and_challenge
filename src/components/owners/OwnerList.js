import React, { Component } from "react"
import "./Owners.css"
import { Link } from "react-router-dom";

class OwnerList extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="ownersButton">
          <button type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/owners/new")
            }
            }>
            Add Owner
                    </button>
        </div>
        <section className="owners list">
          <h2 className="card-title">Owners</h2>
          <div className="card_holder">
            {
              this.props.owners.map(owner =>
                <div key={owner.id} className="card">
                  <section className="ownerName">
                    {owner.name}
                  </section>
                  <section className="ownerNumber">

                    <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                    <a
                      href="#" onClick={() => this.props.deleteOwner(owner.id)}
                      className="card-link">Delete</a>
                  </section>
                </div>
              )
            }
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default OwnerList