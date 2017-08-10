import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FaPlus from 'react-icons/lib/fa/plus'
import List from '../containers/List'

export default class TaskList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '', shouldShowAddNewList: false }
  }

  render() {
    const { addTask, list } = this.props
    const { text, shouldShowAddNewList } = this.state

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
        {list.map(({ subtitle, cards }, index) =>
          <List order={index} subtitle={subtitle} cards={cards} />,
        )}
        {shouldShowAddNewList
          ? <div style={{ width: '250px', height: '100px' }}>
              <input
                style={{
                  display: 'block',
                  width: '100%',
                  height: '50px',
                  border: 0,
                  padding: 0,
                  paddingLeft: '2%',
                  paddingRight: '2%',
                  fontSize: '18px',
                }}
                value={text}
                placeholder="Please leave your advice on this site"
                onChange={e => this.setState({ text: e.target.value })}
              />
              <RaisedButton
                label="ADD"
                style={{ display: 'block' }}
                onTouchTap={() => {
                  addTask(text)
                  this.setState({ shouldShowAddNewList: false, text: '' })
                }}
              />
            </div>
          : <div
              onClick={() => this.setState({ shouldShowAddNewList: true })}
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
            </div>}
      </div>
    )
  }
}
