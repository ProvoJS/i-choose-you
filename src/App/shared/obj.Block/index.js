/*** @jsx React.DOM */
import React from 'react'

const BASE_STYLE = {
  block: {
    display: 'block',
  },
  head: {
    verticalAlign: 'middle',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'inline-block'
  },
  body: {
    display: 'block',
    textAlign: 'left'
  }
}

const SPACING = {
  flush: '0',
  tiny: '2px',
  small: '5px',
  medium: '8px',
  large: '12px',
  huge: '18px'
}

let Block = React.createClass({

  getDefaultProps() {
    return {
      align: 'left',
      space: 'medium'
    };
  },

  PropTypes: {
    head: React.PropTypes.element,
    body: React.PropTypes.element,
    align: React.PropTypes.string,
    space: React.PropTypes.spacing,
  },

  _setAlignment(base) {
    let alignment = this.props.align.toLowerCase()
    let { block, head, body } = base

    if (alignment === "center") {
      block.textAlign = body.textAlign = "center"
    } else if (alignment === "right") {
      block.textAlign = body.textAlign = "right"
    }

    return { block, head, body }
  },

  _setSpacing(base) {
    const { block, head, body } = base
    const space = SPACING[this.props.space.toLowerCase()] || SPACING.medium

    head.marginBottom = space

    return { block, head, body }
  },

  render() {

    let styles = this._setAlignment(BASE_STYLE)
    
    styles = this._setSpacing(styles)

    return(
    	<div style={styles.block}>
        <div style={styles.head}>
          {this.props.head}
        </div>
    		<div style={styles.body}>
          {this.props.body}
        </div>
      </div>
    )
  }

})

export default Block