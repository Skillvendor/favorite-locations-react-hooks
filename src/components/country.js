import React from 'react';

class Country extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='country-item'>
          <p>
            { this.props.id }
          </p>
          <p>
            { this.props.name }
          </p>
        </div>
      </React.Fragment>
    )
  }
}

export default Country
