import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FaPlus from 'react-icons/lib/fa/plus'
import List from '../containers/List'
import styled from 'styled-components'

export default class TaskList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '', shouldShowAddNewListBox: false }
  }

  render() {
    const { addTask, list } = this.props
    const { text, shouldShowAddNewListBox } = this.state

    return (
      <div
        style={{
          padding: '50px',
          display: 'flex',
          whiteSpace: 'nowrap',
          overflowX: 'auto',
        }}
      >
        {list.map(({ subtitle, cards }, index) =>
          <List order={index} subtitle={subtitle} cards={cards} />,
        )}
        {shouldShowAddNewListBox
          ? <AddNewListBox>
              <Input
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
                  this.setState({ shouldShowAddNewListBox: false, text: '' })
                }}
              />
            </AddNewListBox>
          : <AddNewListButton
              onClick={() => this.setState({ shouldShowAddNewListBox: true })}
            >
              <FaPlus />Add a list...
            </AddNewListButton>}
      </div>
    )
  }
}

const AddNewListButton = styled.div`
  border: 1px dotted rgba(0, 0, 0, .23);
  background-color: #d8e0f3;
  min-width: 250px;
  height: 100px;
  line-height: 100px;
  display: inline-block;
  margin-right: 20px;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
`

const AddNewListBox = styled.div`
  border: 1px dotted rgba(0, 0, 0, .23);
  background-color: #d8e0f3;
  min-width: 250px;
  height: 95px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  padding: 5px;
`

const Input = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  border: 0;
  padding: 5px;
  font-size: 18px;
  box-sizing: border-box;
`
