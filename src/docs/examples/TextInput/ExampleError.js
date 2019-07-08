import React from 'react';
import TextInput from 'loot-react-lm/TextInput';

/** Required TextBox with error */
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInput
        htmlId="example-optional"
        label="First Name"
        name="firstname"
        onChange={() => {}}
        placeholder="First Name"
        required
        error="First name is required."
       />
    )
  }
}
