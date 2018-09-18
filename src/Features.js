import React from "react";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";


const shuffle = array => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};



const Item = posed.li({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const StyledItem = styled(Item)`
  padding: 15px;
  list-style-type: none;
  margin: 5px 0px 5px 0px;
  border: none;
  color: #777;
  .desc { display: none; }

  &.index-0 { opacity: 1; }
  &.index-0 h3 { font-size: 32px; color: #000; }
  &.index-0 .desc { color: #000; display: block; }
`;

const ItemList = ({ items }) => (
  <ul>
    <PoseGroup>
      {items.map((item, index) => <StyledItem key={item.id} className={`index-${index}`}><h3>{item.text}</h3><div className="desc">{item.description}</div></StyledItem>)}
    </PoseGroup>
  </ul>
);

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export class Features extends React.Component {
  state = {
    items: [
      { id: 1, text: "SEAMLESS INTERACTION WITH WEBSITES AND APPS", description: (
	<ul><li>No API to learn.</li><li>Integration can be as simple as putting a link, if MasterWallet PRO Desktop is installed.</li></ul>
      ) },
      { id: 2, text: "SAFETY OF TRANSACTIONS", description: (
	<ul><li>Your wallet is encrypted. </li><li>Parts of the wallet can be unlocked on explicit request of permissions</li></ul>
      )  },
      { id: 3, text: "CHECK OF COUNTER-PARTIES", description: (
	<ul><li>Never send to your crypto to scammers.</li><li>Visual helper to identify counter-parties</li></ul>
      )  },
      { id: 4, text: "ASSETS FROM MANY BLOCKCHAINS", description: (
	<ul><li>Provides you the access to more than a thousand of assets.</li><li>Includes mainstream token platforms ETH, EOS</li></ul>
      )  }
    ]
  };

  _shuffle = () => {
    this.setState({ items: shuffle(this.state.items) });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    this.interval = setInterval(this._shuffle, 5000);
  }

  render() {
    return (
      <Container>
        <ItemList items={this.state.items} />
      </Container>
    );
  }
}
