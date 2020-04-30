import React from 'react'

function HelloWithoutJSX() {
    return React.createElement('div',{id:'divId',className:'divClass'}, React.createElement('h5',{id:'h5Id',className:'h5Class'},'Hi there from without JSX'))
}
/*
class => className
for=>htmlFor
onclick=>OnClick
tabindex=>tabIndex
camleCase convention
*/
export default HelloWithoutJSX
