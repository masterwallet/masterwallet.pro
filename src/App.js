import React from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { Intro, ForWhom, SignUp } from './sections/index';

class App extends React.Component {
  render() {
    const options = {
      activeClass:          'active', 
      sectionClassName:     'section',
      anchors:              ['wallet', 'features', 'for-whom'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        true,
      sectionPaddingTop:    '0px',
      sectionPaddingBottom: '0px',
      arrowNavigation:      true
    };
    return (
      <div>
        <SectionsContainer {...options}>
          <Section color="#222">
            <ForWhom />
          </Section>
          <Section>
            <Intro />
	        </Section>
          <Section color="#ffffa0">
            <SignUp />
          </Section>
        </SectionsContainer>
        <div style={{ marginBottom: 20 }}></div>
      </div>
    );
  }
}

export default App;
