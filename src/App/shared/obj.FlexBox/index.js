/*** @jsx React.DOM */
import './style'
import React, { PropTypes } from 'react'
import cn from 'classnames'

let FlexGroup = React.createClass({

  propTypes: {
    direction: PropTypes.string,
    wrap: PropTypes.string,
    justify: PropTypes.string,
    alignItems: PropTypes.string,
    tag: PropTypes.string
  },

  classes() {
    const { direction, wrap, justify, alignItems, className } = this.props

    return cn({
      [`FlexGroup`]: true,
      [`FlexGroup-FlexDirection-${direction}`]: !!direction,
      [`FlexGroup-FlexWrap-${wrap}`]: !!wrap,
      [`FlexGroup-JustifyContent-${justify}`]: !!justify,
      [`FlexGroup-AlignItems-${alignItems}`]: !!alignItems,
      [className]: !!className
    })
  },

  render() {
    let $tag = this.props.tag || 'div'

    return (
      <$tag { ...this.props } className={ this.classes() } >
        {this.props.children}
      </$tag>
    )
  }
})

export default FlexGroup