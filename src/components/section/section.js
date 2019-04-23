import React from "react"
import './section.css';

const Section = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="title">Section title</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">Hello</div>
          <div className="col-sm-4">Hello</div>
          <div className="col-sm-4">Hello</div>
        </div>
      </div>
    </section>
  )
}

export default Section