import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FaPlus from 'react-icons/lib/fa/plus'
import List from './List'

export default class TaskList extends React.Component {
  render() {
    const { addTask, list } = this.props

    return (
      <div
        style={{
          padding: '50px',
          display: 'flex',
          border: '1px solid red',
          whiteSpace: 'nowrap',
          overflowX: 'auto',
        }}
      >
        {list.map(item => <List />)}
        <div
          onClick={() => addTask()}
          style={{
            border: '1px dotted gray',
            backgroundColor: 'yellow',
            minWidth: '250px',
            height: '100px',
            lineHeight: '100px',
            display: 'inline-block',
            marginRight: '20px',
            textAlign: 'center',
            flexWrap: 'nowrap',
            overflowX: 'auto',
          }}
        >
          <FaPlus />Add a list...
        </div>
      </div>
    )
  }
}
