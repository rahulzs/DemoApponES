/**
 * Created by gouravpal on 12/05/17.
 */
import React from 'react';
import {logo} from '!!file!../../images/showtime.jpg';
import {Link, IndexLink} from 'react-router';

/*It's a common presentational component.*/
const Header = ({value, onChange, onSearch}) => {
  return (
    <div>
      <img id="logo" src={logo} alt="logo" title="logo"/>
      <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
      </nav>
      <div>

        <input
          id="searchinput"
          type="text"
          name="search"
          className="form-control"
          placeholder="enter movie name"
          value={value}
          onChange={onChange}></input>

        <input
          type="button"
          title="Search"
          className="btn btn-primary"
          onClick={onSearch}
          value="Search"
        />
      </div>


    </div>
  );
};

Header.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSearch: React.PropTypes.func.isRequired
};

export default Header;
