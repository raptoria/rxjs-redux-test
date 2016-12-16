import React, { PropTypes } from 'react';

class JsonResults extends React.Component {

  static PropTypes = {
    results: React.PropTypes.object
  }

  render(){
    const jsonData = this.props.results || [];
    
    return (
      <div>
        <ul className="list-group">
          { jsonData.map(({ id, title, body }) => (
            <li className="list-group-item" key={id + 2}>
              <h4 className="list-group-item-heading" key={id}>{title}</h4>
              <p className="list-group-item-text" key={title}>{body}</p>
            </li> 
            ))}
        </ul>
      </div>
    );
  }
};

export default JsonResults;
