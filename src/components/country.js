import React from 'react';

class Country extends React.Component {
  render() {
    return (
      <tr>
        <td>
          { this.props.id }
        </td>
        <td>
          { this.props.name }
        </td>
      </tr>
    )
  }
}

export default Country
