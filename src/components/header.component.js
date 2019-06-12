import React, {Component} from 'react';


export default class Header extends Component {
    render() {
       return (
          <div className={this.props.className}>
            <ul>
                <li>
                    My account
                </li>
                <li>
                    Profile settings
                </li>
            </ul>
          </div>
       );
    }
 }

