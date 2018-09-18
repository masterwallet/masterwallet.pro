import React from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { Ring } from './Ring';
import { Features } from './Features';
import { TelosBlockProducer } from './TelosBlockProducer';

class App extends React.Component {
  render() {
    const options = {
      activeClass:          'active', 
      sectionClassName:     'section',
      anchors:              ['wallet', 'features', 'telos'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        true,
      sectionPaddingTop:    '0px',
      sectionPaddingBottom: '20px',
      arrowNavigation:      true
    };
    return (
      <div>
        <SiteHeader />
        <SiteFooter />
        <SectionsContainer {...options}>
          <Section className="custom-section" verticalAlign="true" color="#444">
             <header className="App-header" style={{ textAlign: 'center' }}>
               <h1 style={{ color: '#fff', fontWeight: 900, fontSize: 48, textTransform: 'uppercase' }}>Master Wallet Pro</h1>
               <Ring r={300} />
             </header>
	  </Section>
          <Section color="#A7DBD8">
            <Features />
          </Section>
          <Section color="#E0E4CC">
            <TelosBlockProducer />
          </Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
