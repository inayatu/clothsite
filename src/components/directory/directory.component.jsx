import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          title: "hats",
          linkUrl:"hats",
          imageUrl:
            "https://media.gq.com/photos/5a04f9a398002d2e253679f5/master/pass/fall-hats-gq-style-0816-01-1.jpg",
       
          },
        {
          id: 2,
          title: "jackets",
          linkUrl:"",

          imageUrl:
            "https://m.media-amazon.com/images/I/51JISPYJlwL._AC_UX385_.jpg",
        },
        {
          id: 3,
          linkUrl:"",
          title: "sneakers",
          imageUrl: "https://i.insider.com/55a966f3371d22c6178b62ed?width=700",
        },
        {
          id: 4,
          linkUrl:"",
          title: "women",
          size: "large",
          imageUrl:
            "https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg",
        },
        {
          id: 5,
          linkUrl:"",
          title: "men",
          size: "large",
          imageUrl:
            "https://giovannicosmetics.com/wp-content/uploads/2020/04/For-Men.jpg",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => {
          return (
            <MenuItem
              key={id}
              {...otherSectionProps}
            ></MenuItem>
          );
        })}
      </div>
    );
  }
}

export default Directory;
