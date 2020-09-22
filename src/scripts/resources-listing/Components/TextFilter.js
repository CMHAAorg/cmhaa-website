import React from "react";

import prettifyName from "../Utils/prettyName";
import focusInCurrentTarget from "../Utils/focusCurrent";

class TextFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: props.categories,
      searchText: "",
      searchFiltered: [],
    };

    this._inputChange = this._inputChange.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
  }

  _showOptions(input) {
    let availableOptions = [];
    if (input.length === "") {
      availableOptions = this.state.categories;
    } else {
      availableOptions = this.state.categories.filter((cat) => {
        const pos = cat.name.toLowerCase().indexOf(input.toLowerCase().trim());

        if (pos === -1) {
          return false;
        }

        return true;
      });
    }

    return availableOptions;
  }

  _onFocus() {
    const availableOptions = this._showOptions("");

    this.setState({
      searchFiltered: availableOptions,
    });
  }

  _onBlur(e) {
    if (!focusInCurrentTarget(e)) {
      this.setState({
        searchFiltered: [],
      });
    }
  }

  _inputChange(e) {
    const input = e.target.value;
    const availableOptions = this._showOptions(input);

    this.setState({
      searchText: input,
      searchFiltered: availableOptions,
    });
  }

  _addFilter(el) {
    this.props.update(el);
    this.setState({
      searchText: "",
      searchFiltered: [],
    });
  }

  render() {
    const title = prettifyName(this.props.name);

    const textComplete = this.state.searchFiltered
      .filter((el) => el.active !== true)
      .map((el, i) => {
        return (
          <li key={i}>
            <button onClick={() => this._addFilter(el)} disabled={!el.enabled}>
              {el.name}
            </button>
          </li>
        );
      });

    const activeElements = this.state.categories
      .filter((el) => el.active === true)
      .map((el, i) => {
        return (
          <li key={i}>
            <button
              onClick={() => {
                this.props.update(el);
              }}
            >
              {el.name}
            </button>
          </li>
        );
      });

    return (
      <div className="filter">
        <h3>{title}</h3>
        <div className="text-filter__wrap" onBlur={this._onBlur}>
          <input type="text" value={this.state.searchText} onChange={this._inputChange} onFocus={this._onFocus} placeholder="Type to search" />
          <ul className="text-filter__autocomplete">{textComplete}</ul>
        </div>
        <ul className="text-filter__selected">{activeElements}</ul>
      </div>
    );
  }
}

export default TextFilter;
