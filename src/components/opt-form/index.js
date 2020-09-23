import React from 'react';
import {Container,Input,Break,Button,Text} from './styles/opt-form'
export default function Optform({children,...restProps})
{
    return(<Container {...restProps}>{children}</Container>)
}
Optform.Input=function OptformInput({children,...restProps})
{
return(<Input {...restProps}/>)
}
Optform.Break=function OptformBreak({children,...restProps})
{
return(<Break {...restProps}/>)
}
Optform.Button=function OptformButton({children,...restProps})
{
return(<Button {...restProps}>
{children}<img src="/images/icons/chevron-right.png" alt="Try-now" />
</Button>)
}
Optform.Text=function OptformText({children,...restProps})
{
    return(<Text {...restProps}>
      {children}
    </Text>)
}
