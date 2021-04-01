<!--XRadio Demo-->

```js
import React, { useState } from 'react'
import { XRadioGroup, XRadio } from '../'
const Demo = () => {
  const [value, setValue] = useState('')
    return (
      <div>
        <XRadioGroup
          name="sexs"
          value={value}
          onChange={value => setValue(value)}
          className="center"
        >
          <XRadio value="man">男</XRadio>
          <XRadio value="girl">女</XRadio>
          <XRadio value="unknown" disabled >人妖</XRadio>
       </XRadioGroup>
      </div>
    );
}
```





