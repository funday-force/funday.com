import React from 'react';
import dragula from 'dragula';

export default class Items extends React.Component {
  constructor(props) {
    super();
    this.state = {
      addingItem: false,
      cardOpen: false,
      item: '',
      description: '',
      newItem: '',
      clicked: '',
      items: []
    };
    this.update = this.update.bind(this);
  }

  update(e) {
    if (this.state.newItem !== undefined && this.state.newItem !== ' ') {
      var arrayvar = this.state.items.slice();
      arrayvar.push({ id: arrayvar.length, content: '' + this.state.newItem });
      this.setState({ items: arrayvar });
      this.txtarea.value = '';
    }
  }

  addCard(e) {
    console.log('add Card in list' + this.props.id);
    this.setState({ addingItem: true });
    this.setState({ newItem: e.target.value });
  }

  closeCard() {
    this.setState({ addingItem: false });
    this.setState({ cardOpen: false });
  }

  seeCard(e) {
    console.log('Seeing card id:' + e.target.id);
    this.setState({ cardOpen: true });
    this.setState({ item: e.target });
  }

  updateDescription(e) {
    this.setState({ description: e.target.value });
  }

  saveDescription(e) {
    this.setState({ cardOpen: false });
    console.log('Description: ' + this.state.description);
  }

  render() {
    var d = dragula({
      moves: function(el, cont, handle) {
        return handle.className !== 'title';
      }
    });
    var cs = document.querySelectorAll('.listI');
    for (var i in cs) {
      d.containers.push(cs[i]);
    }
    let items = this.state.items;
    return (
      <div>
        <ul className={'listI list' + this.props.id}>
          {items.map(item => (
            <li
              id={'target-' + item.id}
              key={item.id}
              className="item"
              draggable="true"
              item={item}
              onClick={this.seeCard.bind(this)}
            >
              {item.content}
            </li>
          ))}
        </ul>
        <footer>
          {this.state.addingItem ? (
            <div className="newItem">
              <textarea
                autoFocus
                onChange={this.addCard.bind(this)}
                ref={el => (this.txtarea = el)}
              />
              <button className="addBtn" onClick={this.update.bind(this)}>
                Add
              </button>
              <button className="closeBtn" onClick={this.closeCard.bind(this)}>
                x
              </button>
            </div>
          ) : (
            <a className="addCard" onClick={this.addCard.bind(this)}>
              Add a card...
            </a>
          )}
        </footer>
      </div>
    );
  }
}
