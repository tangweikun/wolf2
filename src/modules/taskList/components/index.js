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
          ? <div
              style={{
                border: '1px dotted gray',
                backgroundColor: '#d8e0f3',
                minWidth: '250px',
                height: '95px',
                marginRight: '20px',
                textAlign: 'center',
                flexWrap: 'nowrap',
                overflowX: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '8px',
                padding: '5px',
              }}
            >
              <input
                style={{
                  display: 'block',
                  width: '100%',
                  height: '50px',
                  border: 0,
                  padding: 0,
                  fontSize: '18px',
                }}
                value={text}
                placeholder="Enter a List name"
                onChange={e => this.setState({ text: e.target.value })}
              />
              <RaisedButton
                primary
                label="ADD"
                style={{ display: 'block' }}
                onTouchTap={() => {
                  addTask(text)
                  this.setState({ shouldShowAddNewList: false, text: '' })
                }}
              />
            </div>
          : <div
              onClick={() =>
                this.setState({
                  shouldShowAddNewList: true,
                })}
              style={{
                border: '1px dotted gray',
                backgroundColor: '#d8e0f3',
                minWidth: '250px',
                height: '100px',
                lineHeight: '100px',
                display: 'inline-block',
                marginRight: '20px',
                textAlign: 'center',
                flexWrap: 'nowrap',
                overflowX: 'auto',
                borderRadius: '8px',
              }}
            >
              <FaPlus />Add a list...
            </div>}
      </div>
    )
  }
}
