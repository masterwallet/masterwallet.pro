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
      // anchors:              ['wallet', 'features', 'for-whom'],
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
          {/*<Section><Intro /></Section>*/}
          <Section color="#222"><ForWhom /></Section>
          {/*<Section><SignUp /></Section>*/}
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
