import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from 'shared/components/button';
import { A11yIcon } from 'shared/icons/a11y-icon';

describe('Testing of <Button /> a11y friendliness', () => {
  it('should capture text from `children` to populate `aria-label` prop', () => {
    const button1 = renderer.create(<Button>Test String</Button>);

    expect(button1.toJSON()).toMatchSnapshot();
  });

  it('should capture text nested within other dom element of `children`', () => {
    const button2 = renderer.create(
      <Button>
        This is a <strong>bold</strong> button
      </Button>,
    );

    expect(button2.toJSON()).toMatchSnapshot();
  });

  it('should ignore non text elements within a button', () => {
    const button3 = renderer.create(
      <Button>
        <A11yIcon />
        <span>A11y Button</span>
      </Button>,
    );

    expect(button3.toJSON()).toMatchSnapshot();
  });
});
